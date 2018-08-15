---
layout: post
date: '2018-08-13 17:40:37'
title: "Conceitos Fundamentais de Orientação a Objetos"
image: /assets/img/thumbnails/conceitos-fundamentais-de-orientacao-a-objetos.png
main-class: 'java'
color: '#1a87a9'
tags: [java, orientacao-a-objetos]
quote: >-
    "A mente que se abre a uma nova ideia jamais volta ao seu tamanho original." - Albert Einstein
description: >-
    Exemplos práticos de Encapsulamento, Herança, Polimorfismo, Classes abstratas e Interfaces em Java.
twitter_text: >-
    Exemplos práticos de Encapsulamento, Herança, Polimorfismo, Classes abstratas e Interfaces em Java.
introduction: >-
    Exemplos práticos de Encapsulamento, Herança, Polimorfismo, Classes abstratas e Interfaces em Java.
---
## Introdução

A Programação Orientada a Objetos também conhecida como POO possui alguns benefícios como concentrar responsabilidades nos locais certos, encapsular lógica de negócio, maior manutenabilidade e maior reaproveitamento de código. No artigo será feito um resumo geral dos fundamentos de OO com exemplos práticos usando Java. Será destacados os assuntos como: Abstração, Encapsulamento, Herança, Polimorfismo, Classes, Atributos, Métodos, Objetos, Classes Abstratas, Interfaces etc.

## Os 4 pilares da Programação Orientada a Objetos:

Existem quatro pilares de programação orientada a objeto. **Abstração**, **Encapsulamento**, **Herança** e **Polimorfismo**. São essenciais no entendimento desse paradigma. Conheceça abaixo as característias de cada um desses pilares.

### Abstração:

A abstração é um processo de **abstrair algo do mundo real e transforma-lo em objeto** na programação com suas característias e funcionalidades. A abstração reduz a complexidade do código e, ao mesmo tempo torna a sua estética agradável.

### Encapsulamento:

O encapsulamento é uma forma de esconder detalhes de funcionamento do programa e também uma maneira de restringir o acesso a certas propriedades ou componentes. É fundamental para permitir que o programa seja suscetível a mudanças. Encapsulamento não é esconder os dados, mas o encapsulamento leva à ocultação de dados.

```java
public class Carro {

    // Campos privados não podem ser acessados diretamente fora da classe
    private String modelo;
    private double velocidadeMaxima;

    public Carro() {
    }

    // Métodos getters e setters declarados como público para alteração dos dados

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public void setVelocidadeMaxima(double velocidadeKMH) {
        velocidadeMaxima = velocidadeKMH;
    }

    public double getVelocidadeMaximaKMH() {
        return velocidadeMaxima;
    }

    public double getVelocidadeMaximaMPH() {
        Double velocidadeMaximaMPH = velocidadeMaxima * 0.621371;
        return Math.round(velocidadeMaximaMPH * 100) / 100d;
    }
}
```

```java
public class principal {

    public static void main(String[] args) {

        // Cria um objeto Carro com o nome fornecido 
        Carro carro = new Carro();

        // Método setter para armazenar a velocidade máxima para essa instância
        carro.setModelo("Golf GTI");
        carro.setVelocidadeMaxima(237.00d);

        // Obtém a velocidade sem se precupar com a conversão KMH / MPH
        System.out.println("Velocidade Máxima: ");
        System.out.println(carro.getModelo() + carro.getVelocidadeMaximaKMH() + " em KMH");
        System.out.println(carro.getModelo() + carro.getVelocidadeMaximaMPH() + " em MPH");
    }
}
    // Saída no console:
    // Velocidade Máxima: 
    // Golf GTI 237.0 em KMH
    // Golf GTI 147.26 em MPH
```

### Herança:

A herança é um mecanismo que permite que uma classe possa herdar o comportamento de outra classe, ao mesmo tempo em que novos comportamentos podem ser estabelecidos. A vantagem da herança é agrupar coisas
comuns para poder reaproveitar código. As sub-classes (classes filhas) herdam da super-classe (classe pai). Ou seja, é a criação de uma nova classe a partir de uma classe existente.


```java
public class Pessoa {

    private String nome;
    private String cpf;

    public Pessoa() {
    }

    public Pessoa(String nome, String cpf) {
        super();
        this.nome = nome;
        this.cpf = cpf;
    }

    @Override
    public String toString() {
        return "Pessoa [nome=" + nome + ", cpf=" + cpf + "]";
    }

    // Métodos Getters e Setters
    // ...
}
```

```java
public class Aluno extends Pessoa {

    public Double nota1;
    public Double nota2;
    public transient Double media;

    public Aluno() {
    }

    public Aluno(String nome, String email, Double nota1, Double nota2) {
        super(nome, cpf);
        this.nota1 = nota1;
        this.nota2 = nota2;
    }

    @Override
    public String toString() {
        return super.toString() + "Aluno [nota1=" + nota1 + ", nota2=" + nota2 + "]";
    }

    // Métodos Getters e Setters
    // ...
}

public class Professor extends Pessoa {

    private Integer matricula;
    private Double salario;

    public Professor() {
    }

    public Professor(String nome, String email, Integer matricula, Double salario) {
        super(nome, email);
        this.matricula = matricula;
        this.salario = salario;
    }

    @Override
    public String toString() {
        return super.toString() + "Professor [matricula=" + matricula + 
        ", salario=" + salario + "]";
    }

    // Métodos Getters e Setters
    // ...
}
```

```java
public class principal {

    public static void main(String[] args) {

        Aluno a = new Aluno("Junior", "111.111.111-11", 10., 8.5);
        System.out.println(a);

        Professor p = new Professor("Belém", "belem@gmail.com", 123, 8000.);
        System.out.println(p);
    }
}
    // Saída no console:
    // Pessoa [nome=Junior, cpf=111.111.111-11]Aluno [nota1=10.0, nota2=8.5]
    // Pessoa [nome=Belem, cpf=222.222.222-22]Professor [matricula=123, salario=8000.0]
```

### Polimorfismo:

Assim como na biologia, o polimorfismo se refere à capacidade de assumir diferentes formas ou estágios. A JVM decide qual método invocar dependendo do objeto instanciado na memória.

```java
class Animal {
    public void falar() {        
    }
}

// Cada animal implementa o método falar() do seu modo

class Cachorro extends Animal {
    public void falar() {
        System.out.println("Au");
    }
}
class Gato extends Animal {
    public void falar() {
        System.out.println("Miau");
    }
}
class Vaca extends Animal {
    public void falar() {
        System.out.println("Mu");
        }
    }
}
```

## Algumas definições

### Classes
Uma classe representa um tipo de dados. É apenas uma estrutura usada como modelo para construir os objetos. Ou seja, são usadas para instanciar objetos.

### Atributos
São as características da classe. São representados por substantivos.

### Métodos
Operações que a classe é capaz de realizar. São representados por verbos

```java
// Classe Livro
public class Livro {

    // Atributos
    private String isbn;
    private String titulo;
    private String autor;
    private int numPaginas;

    // Métodos
    public void emprestar(Cliente c) {
        ...
    }

    public void devolver() {
        ...
    }
}
```

### Objetos

Um objeto é sempre instância de uma classe. Utiliza-se portanto o **new** para instanciá-lo. Dessa forma o objeto possui acesso ao que foi definido na sua estrutura (classe) através do **.**

```java
// Para instanciar objetos, é utilizado o new
Livro livro1 = new Livro();
Cliente cliente1 = new Cliente();

// O objeto possui acesso ao que foi definido na sua estrutura (classe) através do "."
livro1.titulo = "Java Como Programar";
livro1.emprestar(cliente1);

// Cada objeto criado é único. 
// Os atributos de objetos diferentes pertencem apenas ao objeto
Livro livro1 = new Livro();
livro1.isbn = "1234";

Livro livro2 = new Livro();
livro2.isbn = "4321";

Livro livro3 = new Livro();
livro3.isbn = "1212";
```

### Atributos e Métodos Estáticos

São atributos e/ou métodos que não estão atrelados a um objeto específico, mas sim à classe

```java
// Ex01:
public class ContaBancaria {

    // Os valores dos atributos estáticos são compartilhados por todas 
    // as instâncias da classe
    private static String banco = "JavaBank";

    // Métodos estáticos só podem acessar atributos ou outros métodos que 
    // também são estáticos
    private static String getBanco() {
        return ContaBanaria.banco;
    }
}

// Ex02:
// O acesso é feito utilizando diretamente a classe. Não é necessário criar um objeto
String banco = ContaBancaria.getBanco();

// Ex03>
// Atributos estáticos são uma forma bastante usada para criar constantes no Java

// static - Pertence à classe, e não ao objeto
// final - Valor fixo
public class Constantes {
    public static final int VERSAO = 1;
    }
}

int versao = Constantes.VERSAO;
```

### Sobrescrita de Métodos

Técnica também conhecida como **overriding**. Quando uma classe herda de outra, ela pode redefinir métodos da superclasse, isto é, sobrescrever métodos. Os métodos sobrescritos substituem os métodos da superclasse. A assinatura do método sobrescrito deve ser a mesma do método original;

```java
class Telefone {
    public void telefonar() {
        //código para telefonar
    }
}

class Orelhao extends Telefone {
    public void telefonar() {
        //código para telefonar do orelhão
    }

    // Como o método foi sobrescrito, é chamado o método da subclasse
    Orelhao orelhao = new Orelhao();
    orelhao.telefonar();
}

```

### O Operador InstanceOf
Utilizado para verificar se um objeto pertence à determinada classe. Normalmente é utilizado antes de realizar um cast, para garantir que a operação é válida

```java
Animal a = new Cachorro();

a instanceof Cachorro // true
a instanceof Animal // true
a instanceof Gato // false
a instanceof Object // true
```

### Classes abstratas

As **classes abstratas** são usadas quando não faz sentido termos instâncias de determinadas classes, visa manter a consistência do programa. E os **métodos abstratos** são utilizados quando não faz sentido termos a implementação do método em determinada classe.

Todas as classes não-abstratas que herdam de uma classe abstrata são obrigadas a implementar os métodos abstratos. Classes abstratas não precisam obrigatoriamente ter métodos abstratos, mas os Métodos abstratos só podem existir em classes abstratas

```java
// Utiliza o modificador abstract na declaração da classe
public abstract class Animal {
    ...
}

// Métodos abstratos não são implementados
public abstract class Animal {
    public abstract void falar();
}
```

### Interfaces 

As interfaces são especificações ou contratos. Isto é, define um determinado conjunto de métodos que serão implementados nas classes que assinarem esse contrato. O foco é no que o objeto faz, e não em como ele faz. Interfaces não possuem atributos (só constantes). As Classes podem estender outra classe, mas apenas podem implementar interfaces. Uma classe pode implementar uma ou mais interfaces.

```java
// Numa interface, nenhum método é implementado
public interface AreaCalculavel {
    public double calcularArea();
}

// Implementando Interfaces. Os métodos da interface são implementados pela classe

public class Quadrado implements AreaCalculavel {
    private double lado;
    public double calcularArea() {
        return lado * lado;
    }
}

public class Circulo implements AreaCalculavel {
    private double raio;
    public double calcularArea() {
        return Math.PI * raio * raio;
    }
}

// Exemplo de Interface. Utilização de polimorfismo
AreaCalculavel a = new Quadrado();
a.calcularArea();

AreaCalculavel a = new Circulo();
a.calcularArea();

```

## Conclusão

A Orientação a Objetos é uma das várias formas de se programar. Muito usado para diminuir a complexidade do código, a raciocinar sobre o problema a ser resolvido e também no que diz respeito a reutilização, enfim, é uma forma de organização e de como pensar sobre o código.