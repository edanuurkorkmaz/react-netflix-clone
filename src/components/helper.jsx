export const navigate = (path,setPage)=> {
    window.history.pushState({}, "", path);
    setPage(path);
};