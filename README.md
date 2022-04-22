
# Project Title

A brief description of what this project does and who it's for


## API Reference

Base URL: ```https://unofficial-mobile-legends-api.vercel.app/api```

#### Get All Heroes

```
  GET /heroes
```

| Parameter | Type      | Description                       |
| :-------- | :-------- | :------------------------ |
| `heroes`  | `string`  | Get list of all heroes |

#### Get Hero Detail

```
  GET /hero/:id
```

| Parameter | Range    | Type     | Description                       |
| :-------- | :------- | :--------| :------------------------ |
| `id`      | 1-115    | `string` | Id of hero to fetch |

#### Get All Roles

```
  GET /roles
```

| Parameter | Type     | Description                       |
| :-------- | :--------| :------------------------ |
| `roles`   | `string` | List of All roles |

#### Get Hero by Roles

```
  GET /roles/:name
```
List of name can be found through /roles endpoint.

| Parameter | Type     | Description                       |
| :-------- | :--------| :------------------------ |
| `name`    | `string` | List of hero by roles |

Credits

Copyright © 2022 Tulus Ibrahim