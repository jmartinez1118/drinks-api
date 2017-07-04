button.addEventListener("click", drink)

function drink() {
    var button = document.getElementById("usr")

$.ajax({


        url: "http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + usr.value,
        dataType: "json",
        success: function(data) {
            // test the data!!!
            // console.log(data.items);
           




            for ( var  i = 0; i < data.drinks.length; i++){
                // image
                var image = document.createElement("img")
                image.src = data.drinks[i].strDrinkThumb
                body.appendChild(image)
                
                // drink name
                var name = document.createElement("h2")
                name.textContent = data.drinks[i].strDrink
                body.appendChild(name)

                // recipe
                var div = document.createElement("div")
                div.setAttribute("class", "dropdown")
                div.setAttribute("id", "classDiv")
                var recipe = document.createElement("button")
                recipe.setAttribute("id", "recipe")
                recipe.setAttribute("class", "btn btn-primary dropdown-toggle")
                recipe.setAttribute("type", "button")
                body.appendChild(recipe)
                var ul = document.createElement("ul")
                ul.setAttribute("class", "dropdown-menu")
                ul.setAttribute("id", "ul")
                recipe.appendChild(ul)
                var li = document.createElement("li")
                li.textContent = "ingriedients"
                ul.appendChild("li")
    
                recipe.textContent = "recipe" //data.drinks[i].idDrink
                body.appendChild(recipe)

                var ing1 = document.createElement("h3")
                ing1.textContent = data.drinks[i].strIngredient1
                body.appendChild(ing1)


                

                // var category = document.createElement("h3")
                // category.textContent = data.items[i].volumeInfo.categories
                // div.appendChild(category)


        }

}
    })
}
