import React from "react"
import ContentLoader from "react-content-loader"

const MobileCardLoader = props => (
  <ContentLoader
    height={418}
    width={375}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <circle cx="30" cy="30" r="30" /> 
    <rect x="75" y="13" rx="4" ry="4" width="100" height="13" /> 
    <rect x="75" y="37" rx="4" ry="4" width="50" height="8" /> 
    <rect x="4.5" y="138.59" rx="5" ry="5" width="368" height="152" /> 
    <rect x="4.5" y="83.59" rx="0" ry="0" width="246" height="12" /> 
    <rect x="4.5" y="108.59" rx="0" ry="0" width="343" height="10.95" /> 
    <rect x="153.5" y="105.59" rx="0" ry="0" width="0" height="0" /> 
    <rect x="167.5" y="103.59" rx="0" ry="0" width="1" height="8" /> 
    <rect x="12.5" y="304.59" rx="0" ry="0" width="106.11" height="6.48" /> 
    <rect x="9.5" y="325.04" rx="0" ry="0" width="254.34" height="17.6" /> 
    <rect x="8.5" y="355.59" rx="0" ry="0" width="352" height="10.01" /> 
    <rect x="317.5" y="-57.41" rx="0" ry="0" width="327" height="12" /> 
    <rect x="345.5" y="-49.41" rx="0" ry="0" width="390" height="3" /> 
    <circle cx="17.759142264341598" cy="401.8491422643416" r="10.259142264341596" /> 
    <circle cx="606.6923881554251" cy="-42.217611844574876" r="9.192388155425117" /> 
    <circle cx="601.316653826392" cy="-43.593346173608026" r="10.816653826391969" /> 
    <rect x="38.5" y="398.59" rx="0" ry="0" width="76" height="9" />
  </ContentLoader>
)

export default MobileCardLoader;
