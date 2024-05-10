[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<p align="center">
  <!-- <a href="https://github.com/express-nodejs-dynamodb-api">
    <img src="public/logo.png" alt="Logo" width="150">
  </a> -->

  <h3 align="center">API template with DevOps</h3>

  <p align="center">
    <br />
    <a href="https://github.com/express-nodejs-dynamodb-api/tree/main/docs"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/express-nodejs-dynamodb-api/issues">Report Bug</a>
    ·
    <a href="https://github.com/express-nodejs-dynamodb-api/issues">Request Feature</a>
  </p>
</p>

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

## About The Project

Our API template is designed to provide a robust foundation for 
building modern web applications. Leveraging the power of several key technologies, 
we’ve crafted a simple solution. By combining these tools, we create a powerful API 
template.

### Built With

* [NextJS](https://nextjs.org/)
* [ExpressJS](https://expressjs.com/)
* [Clean Arch](https://medium.com/luizalabs/descomplicando-a-clean-architecture-cf4dfc4a1ac6)
* [NodeJS](https://nodejs.org/docs/latest/api/)
* [Github Actions](https://docs.github.com/en/actions)
* [AWS ECS & ECR](https://docs.aws.amazon.com/)
* [Terraform](https://www.terraform.io/)
* [Docker](https://www.docker.com/)

### VS Code Extensions
* GitHub Actions
* Docker
* HashiCorp Terraform
* Prettier - Code formatter

## Getting Started

To get a local copy up and running follow these simple example steps.


### Development

##### AWS
- Connection using ~/.aws/credentials (set with aws cli)

##### Docker
```
docker build -t end-api .
docker run --name ef -p 3000:3000 end-api
```

### Production

##### Github
configure actions secrets and environments variable to run workflows

##### AWS
create a user with a role called ecsTaskExecutionRole with policies:
- AmazonECSTaskExecutionRolePolicy
- AmazonDynamoDBFullAccess

##### Terraform
```
change terraform/config.tf to your credentials
replace <AWS_ACCOUNT_ID> in all files in this repository (ctrl + shift + f - VS Code) to your AWS Account Id
cd .terraform
terraform init
terraform plan
terraform apply
terraform destroy
```

##### Postman
don't forget to use the collection to try it

## Usage


<p align="center">
  with docs/postman files you can interact with the API
</p>

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the GPL-v3 License. See `LICENSE` for more information.

## References 
https://youtu.be/4jhxQoRravI?si=cu5u4qw2burZEpYj

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/ccr5/betting-championship-dapp.svg?style=for-the-badge
[contributors-url]: https://github.com/express-nodejs-dynamodb-api/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ccr5/betting-championship-dapp.svg?style=for-the-badge
[forks-url]: https://github.com/express-nodejs-dynamodb-api/network/members
[stars-shield]: https://img.shields.io/github/stars/ccr5/betting-championship-dapp.svg?style=for-the-badge
[stars-url]: https://github.com/express-nodejs-dynamodb-api/stargazers
[issues-shield]: https://img.shields.io/github/issues/ccr5/betting-championship-dapp.svg?style=for-the-badge
[issues-url]: https://github.com/express-nodejs-dynamodb-api/issues
[license-shield]: https://img.shields.io/github/license/ccr5/betting-championship-dapp.svg?style=for-the-badge
[license-url]: https://github.com/express-nodejs-dynamodb-api/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/mattnobre
[product-screenshot]: images/home.png