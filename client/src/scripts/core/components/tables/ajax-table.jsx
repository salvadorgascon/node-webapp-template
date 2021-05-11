import React from 'react'
import ReactDOM from 'react-dom'

import ReactDOMServer from 'react-dom/server';

import PropTypes from 'prop-types'

import { FormattedMessage, injectIntl } from 'react-intl'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'

import errorNotification from 'scripts/core/functions/notifications/error-notification'

class AjaxTable extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        postData: PropTypes.object,
        gridOptions: PropTypes.object,
        columns: PropTypes.array.isRequired,
        loadCompleteHandler: PropTypes.func,
        selectRowHandler: PropTypes.func,
        rowDoubleClickHandler: PropTypes.func,
        useState: PropTypes.bool
    }

    static defaultProps = {
        postData: {},
        useState: true
    }

    static defaultjqGridOptions = {
        datatype: "local", // "json",
        mtype: 'POST',
        postData: {},
        rowNum: 10,
        // rownumbers: true, // show row numbers
        loadui: 'block',
        autowidth: true,
        height: "100%",
        multiselect: false,
        rowList: [],
        viewrecords: true,
        sortorder: "asc"
    }

    static defaultjqGridSaveStateOptions = {
        storageType: "sessionStorage"
    }

    static defaultjqGridLoadStateOptions = {
        storageType: "sessionStorage"
    }

    constructor(props) {
        super(props);

        this.table = React.createRef();

        this.loadCompleteEventHandler = this.loadCompleteEventHandler.bind(this);
        this.loadErrorEventHandler = this.loadErrorEventHandler.bind(this);

        this.afterInsertRowHandler = this.afterInsertRowHandler.bind(this);

        this.selectRowGridEventHandler = this.selectRowGridEventHandler.bind(this);
        this.selectAllRowsGridEventHandler = this.selectAllRowsGridEventHandler.bind(this);

        this.doubleClickRowGridEventHandler = this.doubleClickRowGridEventHandler.bind(this);

        this.pagingGridEventHandler = this.pagingGridEventHandler.bind(this);
    }

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        this.jqGridOptions = $.extend(true, {}, AjaxTable.defaultjqGridOptions,this.props.gridOptions);

        this.jqGridOptions.url = this.props.url;
        this.jqGridOptions.colModel = this.props.columns;
        this.jqGridOptions.postData = this.props.postData;
        
        if (this.props.columns.length > 1) {
            this.jqGridOptions.sortname = this.props.columns[1].name;
        }

        //this.props.columns.push({
        //    label: "Actions",
        //    name: "Actions",
        //    title: "Actions",
        //    width: 50,
        //    formatter: function(cellValue, options, rowObject) {
        //        return ReactDOMServer.renderToStaticMarkup(
        //            (
        //                <React.Fragment>
        //                    <a href="#"><FontAwesomeIcon icon={faEye} /></a>&nbsp;&nbsp;
        //                    <a href="#"><FontAwesomeIcon icon={faTrash} /></a>
        //                </React.Fragment>)
        //        );
        //    }
        //});

        
        this.jqGridOptions.loadComplete = this.loadCompleteEventHandler;
        this.jqGridOptions.loadError = this.loadErrorEventHandler;
        this.jqGridOptions.afterInsertRow = this.afterInsertRowHandler;

        this.jqGridOptions.onSelectRow = this.selectRowGridEventHandler;
        this.jqGridOptions.onSelectAll = this.selectAllRowsGridEventHandler;

        this.jqGridOptions.ondblClickRow = this.doubleClickRowGridEventHandler;

        this.jqGridOptions.onPaging = this.pagingGridEventHandler;

        this.jqGridOptions.pager = '#' + this.props.id + "-" + "pager";

        this.jqGridOptions.sortname = this.props.columns[0].name;

        var currentState = window.store.session("jqGrid" + this.props.id);

        if (currentState) {
            if (currentState.page) {
                this.jqGridOptions.page = currentState.page;
            }

            if (currentState.sortname) {
                this.jqGridOptions.sortname = currentState.sortname;
            }

            if (currentState.sortorder) {
                this.jqGridOptions.sortorder = currentState.sortorder;
            }

            if (currentState.selrow) {
                this.jqGridOptions.selrow = currentState.selrow;
            }
        }

        $('#' + this.props.id).jqGrid(this.jqGridOptions);

        this.saveStateOptions = $.extend(true, {}, AjaxTable.defaultjqGridSaveStateOptions);
        this.loadStateOptions = $.extend(true, {}, AjaxTable.defaultjqGridLoadStateOptions);
    }

    componentWillUnmount() {
        $('#' + this.props.id).jqGrid("clearGridData");
        $.jgrid.gridDestroy(this.props.id);
    }

    setPostData(postData) {
        $('#' + this.props.id)
            .setGridParam({ 'page': 1 })
            .setGridParam({ 'postData': postData })
            .trigger("reloadGrid");
    }

    load() {
        // $('#' + this.props.id).setGridParam({ 'datatype': 'local' });
        // $('#' + this.props.id).trigger("reloadGrid");

        $('#' + this.props.id).setGridParam({ 'datatype': 'json' }).trigger("reloadGrid");
    }

    reload() {
        $('#' + this.props.id)
            .setGridParam({ 'page': 1 })
            .setGridParam({ 'postData': this.props.postData })
            .trigger("reloadGrid");
    }

    getSelectedRow() {
        var rowId = $('#' + this.props.id).getGridParam('selrow');

        if (rowId) {
            var rowData = $('#' + this.props.id).jqGrid('getRowData', rowId);

            return rowData;
        } else {
            return null;
        }
    }

    deleteSelectedRow() {
        var rowId = $('#' + this.props.id).getGridParam('selrow');

        $('#' + this.props.id).jqGrid('delRowData', rowId);
    }

    saveState() {
        $.jgrid.saveState(this.props.id, this.saveStateOptions);
    }

    loadState() {
        $.jgrid.loadState(this.props.id, this.loadStateOptions);
    }

    loadCompleteEventHandler(data) {
        // jQuery('#jqGrid').jqGrid('setSelection','1014');

        var currentDatType = $('#' + this.props.id).jqGrid('getGridParam','datatype');
        
        // Evitar que quan esta en mode 'local' no executi
        // ja que es posa en local per controlar el moment de carregar les dades 
        if (currentDatType == 'json') {
            
            this.saveState();

            if (this.props.loadCompleteHandler) {
                this.props.loadCompleteHandler(data);
            }
        }

        return false;
    }

    loadErrorEventHandler(xhr, status, error) {
        // xhr.responseText
        errorNotification(this.props.intl.formatMessage({ id: 'errorLoad' }));
        return false;
    }

    afterInsertRowHandler(rowid, rowdata, rowelem ) {

    }

    selectRowGridEventHandler(rowid, status) {
        this.saveState();

        if (this.props.selectRowHandler) {
            this.props.selectRowHandler(rowid, status);
        }
        return false;
    }

    selectAllRowsGridEventHandler(aRowids , status) {
        return false;
    }

    doubleClickRowGridEventHandler(rowid, iRow, iCol, e) {
        if (this.props.rowDoubleClickHandler) {
            this.props.rowDoubleClickHandler(rowid, status);
        }

        return false;
    }

    pagingGridEventHandler(pbButton) {
        return false;
    }



    render() {
        return (
            <React.Fragment>
                <table id={this.props.id} ref={(table) => { this.table = table; }}></table>
                <div id={this.props.id + "-" + "pager"}></div>
            </React.Fragment>
            );
    }
}

export default injectIntl(AjaxTable, { forwardRef: true })