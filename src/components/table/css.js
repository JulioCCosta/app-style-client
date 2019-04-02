export default {
    table: {
        tableWrapper: '',
        tableHeaderClass: 'thead-light',
        tableBodyClass: '',
        tableClass: 'table table-bordered table-striped table-responsive-sm table-hover',
        loadingClass: 'loading',
        ascendingIcon: 'fa fa-chevron-up',
        descendingIcon: 'fa fa-chevron-down',
        ascendingClass: 'sorted-asc',
        descendingClass: 'sorted-desc',
        sortableIcon: 'fa fa-sort',
        detailRowClass: 'vuetable-detail-row',
        handleIcon: 'fa fa-bars text-secondary',
        renderIcon(classes, options) {
            return `<i class="${classes.join(' ')}"></span>`
        }
    },
    pagination: {
        paginationClass: 'pagination',
        paginationInfoClass: 'float-left',
        dropdownClass: 'form-control',
        wrapperClass: 'my-0 pagination b-pagination pagination-md',
        activeClass: 'page-item active',
        disabledClass: 'page-item disabled',
        pageClass: 'page page-item page-link btn-primary',
        linkClass: 'link page-link btn-primary',
        icons: {
            first: 'fas fa-fast-backward',
            prev: 'fas fa-step-backward',
            next: 'fas fa-step-forward',
            last: 'fas fa-fast-forward',
        }
    }
};
