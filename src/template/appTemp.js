const sysWindows = [
    <% _.forEach(windows, function(object) { %>
    {
        app: '<%= object.name %>',
        position: '<%= object.pos %>',
        space: <%= object.space %>,
        display: <%= object.display %>
    },
    <% }); %>
]
