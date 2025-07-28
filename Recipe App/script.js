const container = document.querySelector(".container");
const recipeDetail = document.querySelector("#recipe-detail");
const loader = document.querySelector(".loader");
const apiRecipe = "https://dummyjson.com/recipes";

fetchRecipes();




async function fetchRecipes() {
    loader.classList.toggle("show")
  try {
    let res = await fetch(apiRecipe, {
      method: "GET",
    });

    res = await res?.json();
    loadRecipe(res.recipes);
    loader.classList.toggle("show")
    const recipeBtn =  document.querySelectorAll(".recipe-btn")
    // console.log(recipeBtn);

    recipeBtn.forEach(btn => {
        btn.addEventListener("click",showRecipe)
    });
  } catch (error) {
    console.log(error);
  }
}

function loadRecipe(recipes) {
  const newRecipe = recipes
    .map(
      recipe =>
        `
        <div class="recipe">
            <div class="recipe-img">
                <img src=${recipe.image}>
            </div>
            <div class="recipe-text">
            <h2 class="recipe-desc">${recipe.name}</h2>
                <span class="recipe-meta cuisine">${recipe.cuisine}</span>
                <p class="recipe-desc">${recipe.ingredients}</p>
                <span class="recipe-meta category">${recipe.mealType[0]}</span>
                <span class="recipe-meta rating">${recipe.rating}</span> 
            </div>
            <button class="recipe-btn" type="button">Read Recipe</button>
        </div>
        `
    )
    .join(" ");

  container.innerHTML = newRecipe;
}

function showRecipe(e) {
    window.scrollTo({
    top:document.body.offsetHeight,
    behavior:"smooth"})
    
    recipeDetail.innerHTML =`
        You're Seeing the recipe details of ${e.target.parentElement.firstElementChild.nextElementSibling.firstElementChild.innerHTML}
    `
    // console.log(recipeDetail);
    
}
