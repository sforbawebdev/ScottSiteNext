export const postToCF = async (uri, data) => {
    let form_data = new FormData();
    for ( let key in data ) {
        console.log(data[key]);
        form_data.append(key, data[key]);
    }
    const requestOptions = {
        method: 'POST',
        body: form_data
    };
    
    let response = await fetch(`${uri}/wp-json/contact-form-7/v1/contact-forms/74/feedback`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
        console.log("Create Success: ", data);
        return data;
    })
    .catch((error) => {
        console.error("ERROR: ", error);
        return error;
    })
    return response;
}
export const fontSetter =(name)=>{
    switch(name) {
        case "wordpress": 
            return ['fab', 'wordpress']
        case "desktop":
            return ['fas', 'desktop']
        case "mobile-alt":
            return ['fas', 'mobile-alt']            
        case "email":
            return ['far', 'envelope']
        case "twitter":
            return ['fab', 'twitter']   
        case "linkedin":
            return ['fab', 'linkedin']     
        case "upwork":
            return ['fab', 'upwork']   
        case "github":
            return ['fab', 'github']                       
        default: 
            return ['fab', 'wordpress']
    }
}