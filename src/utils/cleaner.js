export const cleanDate = (dateString) => {
    return (dateString.substring(0,4));
}

export const cleanSummary = (summary) => {
    summary = summary.replace("<b>","");
    summary = summary.replace("</b>","");
    summary = summary.replace("<code>","");
    summary = summary.replace("</code>","");
    summary = summary.replace("<i>","");
    summary = summary.replace("</i>","");
    summary = summary.replace("<p>","");
    summary = summary.replace("</p>","");
    summary = summary.replace("<span>","");
    summary = summary.replace("</span>","");
    summary = summary.replace("<br />","");
    summary = summary.replace("<br/>","");
    summary = summary.replace("<br>","");
    return summary;
}
