import { gql } from '@apollo/client';

const queries = {
    HOME_DATA_QUERY: ()=>{
        return gql`
        query GetPageData{
            pages(where: {title: "Home"})  {
                nodes {
                  pageContent {
                    title
                    url
                    copy
                    backgroundImage {
                      id
                      uri
                      sourceUrl
                    }
                  }
                }
            }
        }
      `;
    },
    ABOUT_DATA_QUERY: ()=>{
      return gql`
      query GetPageData{
          pages(where: {title: "ABOUT"})  {
              nodes {
                pageContent {
                  title
                  url
                  copy
                }
              }
          }
      }
    `;
    },
    CONTACT_DATA_QUERY: ()=>{
      return gql`
      query GetPageData{
          pages(where: {title: "CONTACT"})  {
              nodes {
                pageContent {
                  title
                  url
                  copy
                }
              }
          }
      }
    `;
    },
    PORTFOLIO_DATA_QUERY: ()=>{
      return gql`
      query GetPageData{
          pages(where: {title: "PORTFOLIO"})  {
              nodes {
                pageContent {
                  title
                  url
                  copy
                }
              }
          }
      }
    `;
    },
    TESTIMONIALS_DATA_QUERY: ()=>{
      return gql`
      query GetPageData{
          pages(where: {title: "TESTIMONIALS"})  {
              nodes {
                PageContent {
                  title
                  url
                  copy
                }
              }
          }
      }
    `;
    },  
    SERVICES_QUERY: ()=>{
      return gql`
      query GetServices{
          services{
            nodes {
              id
              title
              serviceContent {
                icon
                title
                copy
              
              }
            }
          }
      }
    `;
    },        
    PROJECTS_QUERY: ()=>{
      return gql`
      query GetProjects{
        projects {
          nodes {
            projectContent {
              title
              description
              url
              image {
                id
                sourceUrl
              }
      
            }
          }
        }
      }
    `;
    },  
    SOCIALS_QUERY: ()=>{
      return gql`
      query GetSocials{
        socials {
          nodes {
            socialContent {	
              name
              url
            }
          }
        }
      }
    `;
    },       
    CLIENTS_QUERY: ()=>{
      return gql`
      query GetClients{
        clients {
          nodes {
            clientContent {
              title
              person
              copy
              linkedin
              twitter
              website
              image {
                id
                sourceUrl
              }
            }
          }
        }
      }
    `;
    },    
    ROUTE_QUERY: () =>{
        return gql`
        query GetRoutes{
          pages (where:{orderby: {field:MENU_ORDER, order:ASC}}){
            nodes {
                title
                uri
                menuOrder
                template {
                  templateName
                }  
            }
          }
        }
      `;
    }
}

export default queries;