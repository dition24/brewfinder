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
        },
        (error) => {
            console.log("bad request", error)
        }
    )
    $("#userInput").val("")
}

function render() {
    breweryInfo.forEach((brew) => {
        $(".one").append("<p>" + (brew.name) + "</p>");
    });
}