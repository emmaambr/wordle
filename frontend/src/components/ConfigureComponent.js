import "../css/Configure.css"

function Configure() {


    return (
        <div className="container">
            <form>
                <label> How many letters? </label>
                <select>
                    <option value="4">Play with 4-letter words</option>
                    <option value="5">Play with 5-letter words</option>
                    <option value="6">Play with 6-letter words</option>
                </select>
              
                <label>
                    <input type="checkbox" value="unique" />
                    Only allow unique characters
                </label>

                <button type="submit"> Play! </button>
            </form>
        </div>
    );
}

export default Configure; 