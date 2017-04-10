/**
 * Created by kellykrawczyk on 4/10/17.
 */
function routeit() {
    var cpc = [], dir = MQ.routing.directions();

    dir.route({
        locations: [
            document.getElementById('orig').value,
            document.getElementById('dest').value
        ],
        options: {
            routeControlPointCollection: cpc
        }
    });


}
