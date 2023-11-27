import BackgroundChanger from "../components/background_changer"




export const GetQuotes = () => {
  return (
    <div className="grid grid-cols-2 w-full h-full">
        <div className="w-fulll  h-full flex items-center justify-center">
            <BackgroundChanger />
        </div>
        <div>
            <img src="\src\assets\img\loading.png" alt="ai-quote-generator" className="w-[80vw] h-[90vh]" />
        </div>
    </div>
  )
}
