package main

import "fmt"

// Definizione della struttura User
type User struct {
    ID        int
    FirstName string
    LastName  string
    Email     string
}

// Definizione dell'interfaccia UserStore
type UserStore interface {
    Save(user *User) error
    GetByID(ID int) (*User, error)
}

// Definizione della struttura MemoryUserStore
type MemoryUserStore struct {
    users []*User
}

// Implementazione del metodo Save di MemoryUserStore
func (store *MemoryUserStore) Save(user *User) error {
    store.users = append(store.users, user)
    return nil
}

// Implementazione del metodo GetByID di MemoryUserStore
func (store *MemoryUserStore) GetByID(ID int) (*User, error) {
    for _, user := range store.users {
        if user.ID == ID {
            return user, nil
        }
    }
    return nil, fmt.Errorf("user not found")
}

// Esempio di utilizzo
func main() {
    // Creazione di un'istanza di MemoryUserStore
    store := &MemoryUserStore{}

    // Salvataggio di un nuovo utente
    user := &User{ID: 1, FirstName: "Mario", LastName: "Rossi", Email: "mario.rossi@example.com"}
    err := store.Save(user)
    if err != nil {
        fmt.Println("Errore durante il salvataggio dell'utente:", err)
    }

    // Recupero dell'utente per ID
    retrievedUser, err := store.GetByID(1)
    if err != nil {
        fmt.Println("Errore durante il recupero dell'utente:", err)
    } else {
        fmt.Println("Utente recuperato:", retrievedUser)
    }
}
