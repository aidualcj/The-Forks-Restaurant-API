// TODO: Use the Fork Api to get a filtered list of restaurants, depending on the category selected (and as a bonus, the location)

const apiUrl = "https://the-fork.api.lewagon.com/api/v1/restaurants"
const searchForm = document.getElementById("searchForm")
const categoriesRadioButtons = document.querySelectorAll(".form-check-input")
const locationInput = document.getElementById("location")
const resultsList = document.getElementById("restaurant-list")

const insertResults = (results) => {
  // Empty the result list
  resultsList.innerHTML = ""

  if (results.length > 0) {
    // Add each restaurant name in the list
    results.forEach((restaurant) => {
      resultsList.insertAdjacentHTML("beforeend", `<li class="list-group-item">${restaurant.name} in ${restaurant.address}</li>`)
    })
  } else {
    // Display a message if results are empty
    resultsList.innerHTML = "<p class=\"text-muted text-center\">No restaurants found! Please select another category or location.</p>"
  }
}

const buildSearchUrl = () => {
  // Find the category button that has been checked
  const checkedCategory = Array.from(categoriesRadioButtons).find((element) => element.checked)
  const categoryValue = checkedCategory.value
  // Get the location input value
  const locationValue = locationInput.value
  // Build the URL with the search params
  return `${apiUrl}?category=${categoryValue}&location=${locationValue}`
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault()

  const searchUrl = buildSearchUrl()

  fetch(searchUrl)
    .then(response => response.json())
    .then((data) => {
      insertResults(data)
    });
})
