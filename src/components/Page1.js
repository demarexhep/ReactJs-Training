import React from "react";

function Page1(props) {
  return (
    <div>
      <h1>
        Hello {props.name} you're {props.age} years old, and Living in{" "}
        {props.location}
      </h1>
      {props.children}
    </div>
  );
}

export default Page1;

{
  /*     Ne lidhje me props:
        -Me props.children mujna prej app.js te page1 me kthy te dhena.
        -Me props tranferojm te dhena ne komponente te ndryshem nepermjet propertive.
        -Props nuk mund te ndryshojne shembull ne page1 nese japim props.name=artan ateher deshton faqja. 
        -Ne app.js thiret <Page1 /> me props me properti perdoret keshtu <Page1 name="artan" age="12" />.
        -Nese deshirojme ti kthejme nga app.js i cili konsiderohet si child i page1 ateher :
        <Page1 name="artan" age="12" =>kto props jane te Page1>ketu i shenojm props e app <p>hello from app.js</p></Page1>.
        -Te functional components thiren props
        -Te class components thiren this.props
      
        */
}
