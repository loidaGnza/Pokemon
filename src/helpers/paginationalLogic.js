export const paginationalLogic = (currentPage,pokemonFilter) =>{
    const pokemonPerPage =12

let pokemonsInPage =[]
const sliceStart = (currentPage-1) * pokemonPerPage
const sliceEnd = currentPage * pokemonPerPage 
pokemonsInPage = pokemonFilter.slice(sliceStart, sliceEnd)

const arrayPages= []
const quantityPages = Math.ceil(pokemonFilter.length / pokemonPerPage)
for(let i =1; i <= quantityPages; i++){
    arrayPages.push(i)
}

const lastPage = arrayPages[arrayPages.length -1]

let pageInBlock = []
const pagesPerBlock = 5
let actualBlock = 1
for(let currentBlock = 1; currentBlock -pagesPerBlock < currentPage; currentBlock ++){
    actualBlock = currentBlock + 1
}

const minPage = actualBlock * pagesPerBlock - pagesPerBlock
for(let currentPageInBlock = actualBlock * pagesPerBlock; currentPageInBlock > minPage; currentPageInBlock--){
    if(currentPageInBlock <= lastPage){
        pageInBlock.unshift(currentPageInBlock)
    }
}

return {pageInBlock, lastPage,pokemonsInPage}
}