function all(){
    let inputValue;
    
    const body = document.body
    const title = document.createElement('div')
    const titleName = document.createElement('h2')
    titleName.className = 'titleName'
    titleName.textContent = 'Fruit Facts'
    body.appendChild(title)
    title.appendChild(titleName)
    const searchCont = document.createElement('div')
    searchCont.className = 'searchCont'
    body.append(searchCont)
    const search = document.createElement('input')
    searchCont.append(search)
    const submit = document.createElement('button')
    submit.className = 'button'
    submit.textContent = 'Search Fruit'
    searchCont.append(submit)

    const leastCalButton = document.createElement('button')
    leastCalButton.className = 'caloriesButton'
    leastCalButton.textContent = 'Lowest Calorie Fruit'
    searchCont.append(leastCalButton)

    const mostCalButton = document.createElement('button')
    mostCalButton.className = 'caloriesButton'
    mostCalButton.textContent = 'Highest Calorie Fruit'
    searchCont.append(mostCalButton)

    const picButton = document.createElement('button')
    picButton.className = 'button'
    picButton.textContent = 'Click here for pictures'
    
    const outerNutCont = document.createElement('div')
    outerNutCont.className = 'outerNutCont'

    const container = document.createElement('div')
    container.className = 'nutCont'
    
    const genus = document.createElement('div')
    genus.className = 'fruitFacts'
    const fruitName = document.createElement('div')
    fruitName.id = 'fruitName'
    fruitName.className = 'fruitFacts'
    const family = document.createElement('div')
    family.className = 'fruitFacts'
    const nutrition = document.createElement('div')
    nutrition.className = 'fruitFacts'
    const nutName = document.createElement('div')
    
    const nutList = document.createElement('div')
    const carbs = document.createElement('div')
    const protein = document.createElement('div')
    const fat = document.createElement('div')
    const calories = document.createElement('div')
    const sugar = document.createElement('div')

    const infoContainer = document.createElement('div')
    infoContainer.className = 'infoContainer'
    const genusInfoHead = document.createElement('div')
    genusInfoHead.className = 'genusInfoHead'
    genusInfoHead.textContent = 'Genus Information'
    const famInfoHead = document.createElement('div')
    famInfoHead.className = 'famInfoHead'
    famInfoHead.textContent = 'Family Information'
    const genusInfo = document.createElement('div')
    genusInfo.className = 'genusInfo'
    const famInfo = document.createElement('div')
    famInfo.className = 'famInfo'

    const malus = document.createElement('p')
    malus.className = 'genusP'
    malus.textContent = 'Malus is a genus of about 30–55 species of small deciduous trees or shrubs in the family Rosaceae, including the domesticated orchard apple – also known as the eating apple, cooking apple, or culinary apple. The genus is native to the temperate zone of the Northern Hemisphere.'
    genusInfo.appendChild(malus)

    const musa = document.createElement('p')
    musa.className = 'genusP'
    musa.textContent = 'Musa is one of two or three genera in the family Musaceae. The genus includes flowering plants producing edible bananas and plantains. Around 70 species of Musa are known, with a broad variety of uses.'
    genusInfo.appendChild(musa)

    const prunus = document.createElement('p')
    prunus.className = 'genusP'
    prunus.textContent = 'Prunus is a genus of trees and shrubs, which includes (among many others) the fruits plums, cherries, peaches, nectarines, apricots, and almonds. Native to the northern temperate regions, 430 different species are classified under Prunus.'
    genusInfo.appendChild(prunus)

    const fragaria = document.createElement('p')
    fragaria.className = 'genusP'
    fragaria.textContent = 'Fragaria is a genus of flowering plants in the rose family, Rosaceae, commonly known as strawberries for their edible fruits. There are more than 20 described species and many hybrids and cultivars.'
    genusInfo.appendChild(fragaria)

    const rosaceae = document.createElement('p')
    rosaceae.className = 'famP'
    rosaceae.textContent = 'Rosaceae, the rose family, is a medium-sized family of flowering plants, including 4,828 known species in 91 genera.'
    famInfo.appendChild(rosaceae)

    const musaceae = document.createElement('p')
    musaceae.className = 'famP'
    musaceae.textContent = 'Musaceae, the banana family of plants (order Zingiberales), consisting of 2 genera, Musa and Ensete, with about 50 species native to Africa, Asia, and Australia. '
    famInfo.appendChild(musaceae)

    const malvaceae = document.createElement('p')
    malvaceae.className = 'famP'
    malvaceae.textContent = 'The mallow family (Malvaceae) contains some 243 genera and at least 4,225 species of herbaceous plants, shrubs, and trees distributed nearly worldwide. Members of the family often feature showy five-petaled flowers with an epicalyx (fused bracts below the sepals).'
    famInfo.appendChild(malvaceae)

    const vitaceae = document.createElement('p')
    vitaceae.className = 'famP'
    vitaceae.textContent = 'The Vitaceae are a family of flowering plants, with 14 genera and around 910 known species, including common plants such as grapevines (Vitis spp.) and Virginia creeper (Parthenocissus quinquefolia). The family name is derived from the genus Vitis.'
    famInfo.appendChild(vitaceae)

    body.appendChild(outerNutCont)
    outerNutCont.appendChild(container)
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
    body.appendChild(infoContainer)
    infoContainer.appendChild(genusInfoHead)
    infoContainer.appendChild(genusInfo)
    infoContainer.appendChild(famInfoHead)
    infoContainer.appendChild(famInfo)
    
    function button(){

        let end = fruitName.textContent.indexOf('Click')
        window.open(`https://www.google.com/search?tbm=isch&q=${fruitName.textContent.slice(6, end)}`, '_blank').focus()
        
    }


    function addEventListener(){
        submit.addEventListener('click', function(){
            inputValue = search.value
            let fruitInfo = {}
            fetch(`https://api.codetabs.com/v1/proxy/?quest=https://fruityvice.com/api/fruit/${inputValue}`, (data) => {
              
            })
                .then(response => response.json())
                .then(data => {
                    search.value = ''
                    nutName.textContent = 'Nutrition(per 100g): '
                    genus.textContent = `Genus: ${data['genus']}`
                    fruitName.textContent = `Name: ${data['name']}`
                    family.textContent = `Family: ${data['family']}`
                    
                    carbs.textContent = `Carbohydrates: ${data.nutritions.carbohydrates}g`
                    protein.textContent = `Protein: ${data.nutritions.protein}g`
                    fat.textContent = `Fat: ${data.nutritions.fat}g`
                    calories.textContent = `Calories: ${data.nutritions.calories}`
                    sugar.textContent = `Sugar: ${data.nutritions.sugar}g`
                    fruitName.appendChild(picButton)
                    picButton.removeEventListener('click', button)
                    picButton.addEventListener('click', button)
                        
                    console.log(data)
                })
            
            
        })
        
        leastCalButton.addEventListener('click', function(){
            inputValue = 'Strawberry'
            search.value = ''
                    nutName.textContent = 'Nutrition(per 100g): '
                    genus.textContent = `Genus: Fragaria`
                    fruitName.textContent = `Name: ${inputValue}`
                    family.textContent = `Family: Rosaceae`
                    
                    carbs.textContent = `Carbohydrates: 5.5g`
                    protein.textContent = `Protein: 0.8g`
                    fat.textContent = `Fat: 0.4g`
                    calories.textContent = `Calories: 29`
                    sugar.textContent = `Sugar: 5.4g`

            fruitName.appendChild(picButton)

            picButton.removeEventListener('click', button)

            picButton.addEventListener('click', button)
        })
        
        mostCalButton.addEventListener('click', function(){
            inputValue = 'Durian'
            search.value = ''
                    nutName.textContent = 'Nutrition(per 100g): '
                    genus.textContent = `Genus: Durio`
                    fruitName.textContent = `Name: ${inputValue}`
                    family.textContent = `Family: Malvaceae`
                    
                    carbs.textContent = `Carbohydrates: 27.1g`
                    protein.textContent = `Protein: 1.5g`
                    fat.textContent = `Fat: 5.3g`
                    calories.textContent = `Calories: 147`
                    sugar.textContent = `Sugar: 6.75g`


            fruitName.appendChild(picButton)

            picButton.removeEventListener('click', button)

            picButton.addEventListener('click', button)
        })
            
            
        
    }



    
    addEventListener()
}
all()