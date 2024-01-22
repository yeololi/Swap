package utils

type User struct {
	ID          int64  `json:"id"`
	Email       string `json:"email"`
	Pw          string `json:"pw"`
	Nickname    string `json:"nickname"`
	BankAccount int64  `json:"bank_account"`
	Bank        string `json:"bank"`
	Address     string `json:"address"`
	Height      int    `json:"height"`
	Weight      int    `json:"weight"`
	Gender      bool   `json:"gender"`
	Age         int    `json:"age"`
}
