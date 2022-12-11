import {createBrowserRouter} from  'react-router-dom';
import Main from '../Layout/Main';
import DetailsPage from '../Pages/DetailsPage/DetailsPage';
export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<>Nothin found</>
            },
            {
                path:'/:id',
                element:<DetailsPage/>
            }
        ] 
    }
]);