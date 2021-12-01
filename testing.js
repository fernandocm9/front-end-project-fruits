function all(){
    let inputValue;

    const body = document.body
    const search = document.createElement('input')
    body.append(search)
    const submit = document.createElement('button')
    submit.textContent = 'Search Fruit'
    body.append(submit)


    const container = document.createElement('div')
    const genus = document.createElement('div')
    const fruitName = document.createElement('div')
    const family = document.createElement('div')
    const nutrition = document.createElement('div')
    const nutName = document.createElement('div')
    
    const nutList = document.createElement('div')
    const carbs = document.createElement('div')
    const protein = document.createElement('div')
    const fat = document.createElement('div')
    const calories = document.createElement('div')
    const sugar = document.createElement('div')
    body.appendChild(container)
    container.appendChild(fruitName)
    container.appendChild(genus)
    container.appendChild(family)
    container.appendChild(nutrition)
    nutrition.appendChild(nutName)
    nutrition.appendChild(nutList)
    nutList.appendChild(carbs)
    nutList.appendChild(protein)
    nutList.appendChild(fat)
    nutList.appendChild(calories)
    nutList.appendChild(sugar)



    function addEventListener(){
        submit.addEventListener('click', function(){
            inputValue = search.value
            let fruitInfo = {}
            fetch(`https://api.codetabs.com/v1/proxy/?quest=https://fruityvice.com/api/fruit/${inputValue}`, (data) => {

                
            })
                .then(response => response.json())
                .then(data => {
                    search.value = ''
                    nutName.textContent = 'Nutrition(per 100g):'
                    genus.textContent = `Genus: ${data['genus']}`
                    fruitName.textContent = `Name: ${data['name']}`
                    family.textContent = `Family: ${data['family']}`
                    // nutrition.textContent = `Nutrition(per 100g):`
                    carbs.textContent = `Carbohydrates: ${data.nutritions.carbohydrates}g`
                    protein.textContent = `Protein: ${data.nutritions.protein}g`
                    fat.textContent = `Fat: ${data.nutritions.fat}g`
                    calories.textContent = `Calories: ${data.nutritions.calories}g`
                    sugar.textContent = `Sugar: ${data.nutritions.sugar}g`
                    
                    console.log(data)
                })
            
            
        })
        
        
            
            
            
        
    }



    // createElements()
    addEventListener()
}
all()