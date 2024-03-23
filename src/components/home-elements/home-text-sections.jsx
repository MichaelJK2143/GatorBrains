

export const HomeTextSection = ({ heading="Heading", children }) => {
    return (
        <div className="container flex flex-col gap-4 space-y-3">
            <h1 style={HeadingStyle}>
                {heading}
            </h1>
            <p style={TextStyle}> {children} </p>
        </div>
    )
}

const HeadingStyle = {
    color:"#0044CC",
    fontSize:"2.25rem",
    fontWeight:"700",
    letterSpacing:"-0.05em"
}

const TextStyle = {
    color:"#0044CC",
    fontSize:"1.25rem"
}

