import { FilterCriteria } from "../components/FilterCard";
import useData from "./useData";
import config from "../config/config.json"

export interface Car {
    ID: string;
    manufacturer: string;
    model: string;
    bodytype: string;
    engine: string;
    fuel: string;
    transmission: string;
    transmissiontype: string;
    highlight_image: string;
}

const useCars = (selectedFilters: FilterCriteria[]|null) => {
    let params = new URLSearchParams();
    if (selectedFilters) {
      for (const criteria of selectedFilters){
        const criteria_key = Object.keys(criteria)[0];
        if (criteria[criteria_key].length > 0) {
          for (const criteria_value of criteria[criteria_key]){
            params.append(criteria_key, String(criteria_value));
          }
        }
      }
    }
  
    return useData<Car>(config.carEndpoint, {params: params}, [selectedFilters]);
}

export default useCars;