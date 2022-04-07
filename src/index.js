(function () {
  // Get all elements...
  let loading = false;
  const inputSearch = document.getElementById("input");
  const buttonSearch = document.getElementById("button");
  const totalCountEle = document.getElementById("totalCount");
  const loader = document.getElementById("loader");
  const table = document.getElementById("table");

  // Add event Listeners...
  inputSearch.addEventListener("change", debounce(onInputValueChange));
  buttonSearch.addEventListener("click", onSearchClick);

  function debounce(fn, delayTime) {
    let executable = true;

    return function (e) {
      if (executable) {
        executable = false;
        fn(e);
        setTimeout(function () {
          executable = true;
        }, delayTime);
      }
    };
  }

  function getAPI(city) {
    return `https://jsonmock.hackerrank.com/api/cities/?city=${city}`;
  }

  function fetchCities(city) {
    showLoading();
    fetch(getAPI(city))
      .then((response) => response.json())
      .then((data) => {
        hideLoading();
        console.log(data);
      })
      .catch((e) => {
        hideLoading();
      });
  }

  function onInputValueChange(e) {
    const { value } = e.target;
    const validPattern = /^[A-Z]+$/i;

    if (validPattern.test(value)) {
      fetchCities(value);
    } else {
      alert("Please provide the valid input");
    }
  }

  function onSearchClick(e) {
    const { value } = e.target;
    const validPattern = /^[A-Z]+$/i;

    if (validPattern.test(value)) {
    } else {
      alert("Please provide the valid input");
    }
  }

  // Loading....
  function showLoading() {
    loader.innerText = "Loading...";
  }

  function hideLoading() {
    loader.innerText = "";
  }
})();
