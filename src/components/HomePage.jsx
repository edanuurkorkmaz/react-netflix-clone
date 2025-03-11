import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";



export default function HomePage(){
    const [movies, setMovies]= useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
    
        const getMovies = async ()=> {
            console.log("istek atıldı");
            
            try{
                const response = await fetch("https://clonejson.vercel.app/api/movies");
                setIsLoading(false);
                if(!response.ok){
                    setMovies([]);
                    setError("veriler getirilirken bir hata oluştu")
                    console.log(response.status);

                    if(response.status === 429){
                        setError("Çok fazla istek yolladınız")
                    }
                    return;
                    
                }
                const data = await response.json();
                setMovies(data);
            }catch(e){
                setMovies([]);
                setIsLoading(false);
                setError("Veriler getirilirken bir hata oluştu");
            }
        }
        getMovies();
    },[]);


   
}






