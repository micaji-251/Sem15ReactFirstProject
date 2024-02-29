import './SectionText.css';

export const SectionText =({Title,SubTitle})=>{
    return(
        <>
            <h1 className="Title">{Title}</h1>
            <h2 className="SubTitle">{SubTitle}</h2>
        </>
    )
}