import React, {
  
  useCallback,
  useContext,
  
} from "react";
import { useNavigation } from "react-navi";
import ServicesApi from "../../api/services";
import { GlobalContext } from "../../context/GlobalContext";
import $ from "jquery";
const SearchBar = () => {
  const { searchScrip, singleScrip, pages } = useContext(GlobalContext);
  const [search, setsearch] = searchScrip;
  const [scrip, setScrip] = singleScrip;
  const [currentPage, setCurrentPage] = pages;
  
  const debounce = (func: { apply: (arg0: undefined, arg1: any) => void }) => {
    let timer: any;
    let _that = this;
    return function (...args: any) {
      const context = _that;
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const handleChange = (event: any) => {
    const { value } = event.target;
    if (value !== "" || value !== undefined || value !== null) {
      const searchScrip = async () => {
        const { data } = await ServicesApi.get<[]>(
          `scriplists/search/${value}`
        );
        return data;
      };

      searchScrip()
        .catch((e) => {})
        .then((data: any) => {
          if (data != undefined) {
            setsearch(data.result);
          } else {
            console.log("error--------");
          }

          //
        });
    }
  };

  const getSingleScrip = (id: any) => {
    //------------------------------------end
    const searchScrip = async () => {
      const { data } = await ServicesApi.get<[]>(`scriplists/${id}`);
      return data;
    };

    searchScrip()
      .catch((e) => {})
      .then((data: any) => {
        if (data != undefined) {
          setScrip(data);
        } else {
          console.log("error--------");
        }
      })
      .finally(() => {
        setCurrentPage("detailed");
      });
      //------------------------------------end
     
    
  };
  const optimisedFunc = useCallback(debounce(handleChange), []);
  const openAutocomplete = () => {
    $(".autocomplete").show();
  };

  $(document).on("click", function () {
    $(".autocomplete").hide();
  });
  return (
    <div className="search-area">
      <div className="input-group">
        <input
          type={"text"}
          className={"form-control"}
          placeholder={"Search...."}
          onChange={optimisedFunc}
          onKeyUp={openAutocomplete}
        />
        <div className="input-group-append">
          <button className="btn btn-secondary search-button" type="button">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
      {search?.length > 0 && (
        <div className={"autocomplete"}>
          {search.map((el: any, i: number) => {
            return (
              <div className={"autocompleteItem"} key={i}>
                <a
                  className={"autocompleBtn"}
                  href={"#"}
                  onClick={() => {
                    getSingleScrip(el._id);
                  }}
                >
                  <span className="ScripCode">{el.scripcode}</span>
                  <span className="ScripName">{el.scripname}</span>
                  <span className="ScripType">{"Equity"}</span>
                </a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
