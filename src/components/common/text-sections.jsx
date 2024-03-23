import colors from "@/css/colors.json"

export const TextSection = ({ heading="Heading", children }) => {
    return (
        <div className="container" style={SectionStyle}>
            <h1 style={HeadingStyle}>
                {heading}
            </h1>
            <div style={TextStyle}> {children} </div>
        </div>
    )
}

const SectionStyle = {
    display:"flex",
    flexDirection:"column",
    allignItems:"center",
    justifyContent:"center",
    padding:"20px",
    gap:"0.25rem",
    flex:"1 1 auto"
}


const HeadingStyle = {
    color:colors["gator_blue"],
    fontSize:"2.25rem",
    fontWeight:"700",
    letterSpacing:"-0.05em"
}

const TextStyle = {
    color:"#0044CC",
    fontSize:"1.25rem"
}

