function Pagination({page, totalPages, changePage}: {page: number, totalPages: number, changePage: Function}) {

  function getPageClasses(elementPage: string): string{
    let classes: string = "pagination__page ";

    if(elementPage === "<" || elementPage === "<<"){
      classes += page === 1 ? 'pagination__page--disabled' : 'pagination__page--not-selected';
    } else if(elementPage === ">" || elementPage === ">>"){
      classes += page === totalPages ? 'pagination__page--disabled' : 'pagination__page--not-selected';
    }else{
      classes += page === Number(elementPage) ? 'pagination__page--selected' : 'pagination__page--not-selected';
    }

    if(!Number(elementPage)){
      classes += " pagination__page--action"
    }

    return classes;
  }

  const pages: string[] = ["<<","<"];
    pages.push(page ? page.toString() : "1")
    pages.push(">",">>");
  

  return (
    <div className='pagination'>
      {pages.map((currentPage) => <div key={currentPage} className={getPageClasses(currentPage)} onClick={() => changePage(currentPage)}>{currentPage}</div>)}
    </div>
  )
}

export default Pagination
