import Data from '../mockData/Data.json'
import SearchBar from './SearchBar'

function SearchPage() {

    return <>
        <SearchBar placeholder="Enter band" data={Data} />
    </>
}

export default SearchPage