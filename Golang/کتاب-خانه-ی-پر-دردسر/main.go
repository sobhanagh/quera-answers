package library

import (
	"fmt"
	"strings"
)

type Library struct {
	capacity int
	len      int
	books    map[string]string
}

func NewLibrary(capacity int) *Library {

	return &Library{
		capacity: capacity,
		len:      0,
		books:    make(map[string]string, capacity),
	}

}

func (library *Library) AddBook(name string) string {
	name = strings.ToLower(name)
	checkBookExist := false
	checkCapacityFull := true

	_, found := library.books[name]
	checkBookExist = found

	if library.len != library.capacity {
		checkCapacityFull = false
	}

	if checkCapacityFull && checkBookExist {
		return "The book is already in the library"
	}
	if checkCapacityFull && !checkBookExist {
		return "Not enough capacity"
	}

	library.books[name] = ""
	library.len++

	return "OK"
}

func (library *Library) BorrowBook(bookName, personName string) string {
	bookName = strings.ToLower(bookName)
	checkBookExist := false

	_, found := library.books[bookName]
	checkBookExist = found

	if !checkBookExist {
		return "The book is not defined in the library"
	}

	if checkBookExist && library.books[bookName] != "" {
		return fmt.Sprintf("The book is already borrowed by %s", library.books[bookName])
	}
	library.books[bookName] = personName

	return "OK"
}

func (library *Library) ReturnBook(bookName string) string {
	bookName = strings.ToLower(bookName)
	checkBookExist := false

	_, found := library.books[bookName]
	checkBookExist = found

	if !checkBookExist {
		return "The book is not defined in the library"
	}
	if checkBookExist && library.books[bookName] == "" {
		return "The book has not been borrowed"
	}

	library.books[bookName] = ""

	return "OK"
}
