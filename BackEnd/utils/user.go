package utils

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type User struct {
	ID          string `json:"id" gorm:"type:char(36);"`
	Email       string `json:"email"`
	Pw          string `json:"pw"`
	Nickname    string `json:"nickname"`
	BankAccount int64  `json:"bank_account"`
	Bank        string `json:"bank"`
	Address     string `json:"address"`
	Height      int    `json:"height"`
	Weight      int    `json:"weight"`
	Gender      string `json:"gender"`
	Age         int    `json:"age"`
}

func (user *User) BeforeCreate(tx *gorm.DB) (err error) {
	user.ID = uuid.New().String() // ID 필드를 UUID로 설정합니다.
	if user.Gender == "true" {
		user.Gender = "1"
	} else {
		user.Gender = "0"
	}
	return
}
