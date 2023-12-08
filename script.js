const $name = $('#name');
const $input = $('#userInput');

let breweryInfo, userInput

$("form").on("submit", handleGetData)

function handleGetData(event) {
    event.preventDefault()
    userInput = $input.val()
    $.ajax({
        url: "https://api.openbrewerydb.org/v1/breweries?by_city=" + userInput + "&per_page=10"
    }).then(
        (data) => {
            breweryInfo = data
            render()
            console.log(data)
        },
        (error) => {
            console.log("bad request", error)
        }
    )
}

function render() {
    console.log(breweryInfo[1].name)
    breweryInfo.forEach((brew) => {
        //$name.text(brew.name)//
        //$("<p>" + $name.text(brew.name) + "</p>");//
        $(".one").append("<p>" + (brew.name) + "</p>");
    });
}