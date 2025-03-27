import gatos from '../../assets/data/catsData'
import Button from '../Button/Button';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";



const CatDetails = ({ cat, action, text }) => {
    const catMock = gatos.find(g => g.nombre === cat.name);
    const { t } = useTranslation();
  
    const navigate = useNavigate();
    return (
      <div className="mt-4 w-full flex flex-col items-start">
        <img src={cat.url} alt={cat.name} className="w-100 h-70 object-cover"/>        
        <p className='w-full px-[20%] text-lg mt-3'><strong className=" text-teal-400">Raza:&nbsp;</strong>{cat.breeds[0].name}</p>
        <p className='text-justify mt-5'><strong className="text-base text-teal-400">Descripción: </strong>{cat.breeds[0].description}</p>
        <p className='text-justify mt-3'><strong className="text-base text-teal-400">Temperamento: </strong>{cat.breeds[0].temperament}</p>        
        <p className="text-left w-full mx-[15%] mt-10">
            <strong className="text-base text-teal-400">Edad: </strong>{catMock.edad}&nbsp;&nbsp;
            <strong className="text-base text-teal-400 ml-24">Vacunas: </strong>{catMock.vacunas ? "Si" : "No"}
        </p> 
        <Button className="justify ml-0 mt-5 w-full text-lg" text={t("adopt_me")}
        onClick={()=> navigate("/adopt", {state: {catName: cat.breeds[0].name}})}/>         
      </div>
    
    );
  };
  
  export default CatDetails;