## users テーブル

| Column   | Type   | Options    |
| -------- | ------ | ---------- |
| name     | string | null:false |
| email    | string | null:false |
| password | string | null:false |

### Association

- has_many :groups,through: :groups_users
- has_many :messages
- has_many :groups_users

## groups テーブル

| Column | Type   | Options    |
| ------ | ------ | ---------- |
| name   | string | null:false |

### Association

- has_many:users.through::groups_users
- has_many:messages
- has_many:groups_users

## groups_users テーブル

| Column   | Type      | Options                        |
| -------- | --------- | ------------------------------ |
| user_id  | reference | null: false, foreign_key: true |
| group_id | reference | null: false, foreign_key: true |

### Association

- belongs_to :group
- belongs_to :user

## messages テーブル

| Column | Type      | Options                     |
| ------ | --------- | --------------------------- |
| text   | text      | null:false                  |
| image  | text      | null:true                   |
| user   | reference | null:false,foreign_key:true |
| group  | reference | null:false.foreign_key:true |

### Association

- belongs_to:group
- belongs_to:user
