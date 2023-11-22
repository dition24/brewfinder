const $name = $('#name');
const $input = $('#userInput');

let breweryInfo, userInput

$("form").on("submit", handleGetData)

function handleGetData(event) {
    event.preventDefault()
    userInput = $input.val()
    $.ajax({
        url: "https://api.openbrewerydb.org/v1/breweries/random"
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
    console.log(breweryInfo[0].name)
    $name.text(breweryInfo[0].name)
}