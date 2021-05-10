import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

import { FormattedMessage, injectIntl } from 'react-intl'

class ArrayTable extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        data: PropTypes.array.isRequired,
        gridOptions: PropTypes.object,
        columns: PropTypes.array.isRequired
    }

    static defaultjqGridOptions = {
        datatype: "local",
        loadui: 'block',
        autowidth: true,
        height: "100%",
        rowNum: 10,
        // rownumbers: true, // show row numbers
        multiselect: false,
        rowList: [],
        viewrecords: true,
        sortorder: "asc",
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

        this.afterInsertRowHandler = this.afterInsertRowHandler.bind(this);

        this.selectRowGridEventHandler = this.selectRowGridEventHandler.bind(this);
        this.selectAllRowsGridEventHandler = this.selectAllRowsGridEventHandler.bind(this);

        this.doubleClickRowGridEventHandle = this.doubleClickRowGridEventHandler.bind(this);

        this.pagingGridEventHandler = this.pagingGridEventHandler.bind(this);
    }

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        this.jqGridOptions = $.extend(true, {}, ArrayTable.defaultjqGridOptions, this.props.gridOptions);

        this.jqGridOptions.colModel = this.props.columns;
        this.jqGridOptions.postData = this.props.postData;

        if (this.props.columns.length > 1) {
            this.jqGridOptions.sortname = this.props.columns[1].name;
        }

        this.jqGridOptions.loadComplete = this.loadCompleteEventHandler;
        this.jqGridOptions.afterInsertRow = this.afterInsertRowHandler;

        this.jqGridOptions.onSelectRow = this.selectRowGridEventHandler;
        this.jqGridOptions.ondblClickRow = this.doubleClickRowGridEventHandler;

        this.jqGridOptions.onPaging = this.pagingGridEventHandler;

        this.jqGridOptions.pager = '#' + this.props.id + "-" + "pager";

        $('#' + this.props.id).jqGrid(this.jqGridOptions);

        this.saveStateOptions = $.extend(true, {}, ArrayTable.defaultjqGridSaveStateOptions);
        this.loadStateOptions = $.extend(true, {}, ArrayTable.defaultjqGridLoadStateOptions);
    }

    saveState() {
        $.jgrid.saveState(this.props.id, this.saveStateOptions);
    }

    loadState() {
        $.jgrid.loadState(this.props.id, this.loadStateOptions);
    }

    loadCompleteEventHandler(data) {
        return false;
    }

    afterInsertRowHandler(rowid, rowdata, rowelem) {
        return false;
    }

    selectRowGridEventHandler(rowid, status) {
        return false;
    }

    selectAllRowsGridEventHandler(aRowids, status) {
        return false;
    }

    doubleClickRowGridEventHandler(rowid, iRow, iCol, e) {
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

export default injectIntl(ArrayTable, { forwardRef: true })