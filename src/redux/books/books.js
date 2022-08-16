const ADDBOOK = 'ADDBOOK';
const REMOVEBOOK = 'REMOVEBOOK';

export const addBook = () => {
    
    return ({ 
        type: ADDBOOK
    });
  }

export const removeBook = () => {
    
    return ({ 
        type: REMOVEBOOK
    });
  }

