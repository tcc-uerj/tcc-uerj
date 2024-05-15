-- Insert initial data
insert into lesson (id, subject, content, description, image_url, challenge_id)
VALUES (
        (select nextval('lesson_id_seq')),
        'CLEAN_CODE',
        '"Clean code" é um conceito fundamental na programação que se concentra em escrever código de forma clara, legível e de fácil manutenção. É essencialmente a arte de manter seu código tão organizado e compreensível quanto possível. Imagine isso como a prática de manter sua casa arrumada: quando tudo está em seu lugar e limpo, é mais fácil encontrar o que você precisa e realizar suas tarefas diárias.
        Uma parte crucial de escrever código limpo é escolher nomes significativos para variáveis, funções e classes. Nomes descritivos tornam mais fácil entender o propósito de cada elemento do seu código, tanto para outros programadores quanto para você mesmo ao revisitar o código mais tarde. Além disso, é importante dividir o código em funções pequenas e bem definidas, cada uma realizando uma única tarefa. Isso torna o código mais fácil de entender, reutilizar e manter no futuro.
        Comentários são outra ferramenta importante em clean code, mas devem ser usados com moderação e intencionalidade. Eles devem explicar o porquê de algo está sendo feito de uma certa maneira, não o que está sendo feito - o código em si deve ser autoexplicativo sempre que possível. Além disso, manter um formato consistente em todo o seu código, incluindo a indentação, o uso de espaços em branco e a colocação de chaves, ajuda a tornar o código mais legível e fácil de seguir.
        Outros princípios do clean code incluem a eliminação de código duplicado, a escrita de testes automatizados abrangentes para verificar o funcionamento do código e a prática de refatoração constante para melhorar a estrutura e a legibilidade do código. Ao seguir esses princípios básicos, os programadores iniciantes podem começar a desenvolver um estilo de codificação que promove a clareza, a manutenibilidade e a eficiência em seus projetos.',
        'Clean code é um estilo de programação que enfatiza a legibilidade, manutenibilidade e eficiência do código-fonte. Ele se concentra em escrever código claro, conciso e bem organizado, seguindo princípios e práticas que facilitam a compreensão e a colaboração entre os membros da equipe de desenvolvimento. O código limpo promove uma melhor qualidade do software, reduzindo bugs, facilitando a depuração e permitindo escalabilidade a longo prazo.',
        'https://hermes.dio.me/articles/cover/f5ce5d6c-a6c8-4dda-890f-746d2f3ad772.jpg',
        8
       ),
       (
        (select nextval('lesson_id_seq')),
        'DESIGN_PATTERN',
        'Design pattern, ou padrão de projeto, é uma abordagem para resolver problemas comuns de design de software de forma eficiente e reutilizável. É como usar modelos comprovados para construir uma casa: você não precisa reinventar a roda toda vez que enfrenta um problema de design, mas sim aplicar soluções que foram refinadas e testadas pelo tempo.
        Existem muitos padrões de projeto diferentes, cada um com um propósito específico. Por exemplo, o padrão Singleton é usado quando você precisa garantir que uma classe tenha apenas uma instância, enquanto o padrão Factory é útil quando você quer delegar a responsabilidade de criação de objetos para uma classe separada.
        Um dos padrões mais conhecidos é o MVC (Model-View-Controller), que separa a lógica de negócios (Model), a apresentação dos dados (View) e o controle das interações do usuário (Controller). Isso promove a modularidade, a manutenibilidade e a reutilização do código.
        Outro padrão comum é o Observer, que é útil quando você precisa notificar vários objetos sobre as mudanças de estado de um objeto observado. Isso é particularmente útil em sistemas onde diferentes partes do código precisam ser atualizadas em resposta a mudanças em outras partes.
        Assim como o clean code, os padrões de projeto ajudam os desenvolvedores a escrever software mais eficiente, organizado e fácil de manter. Eles fornecem soluções testadas e comprovadas para problemas comuns de design, permitindo que os desenvolvedores construam sistemas robustos e escaláveis com mais facilidade.',
        'Design Pattern é uma abordagem de design de software que oferece soluções reutilizáveis para problemas comuns de desenvolvimento. Consiste em padrões de organização estrutural e comportamental que promovem a flexibilidade, a manutenibilidade e a extensibilidade do código. Ao aplicar padrões de design, os desenvolvedores podem criar sistemas mais robustos e modularizados, facilitando a compreensão e a evolução do software ao longo do tempo.',
        'https://media.geeksforgeeks.org/wp-content/uploads/20240415164341/Creational-Design-Patterns.webp',
        20
       );

insert into lesson_link (id, link, lesson_id, "order", type)
values ((select nextval('lesson_link_id_seq')), 'https://blog.rocketseat.com.br/clean-code-qualidade-do-desenvolvimento/', 1, 1, 'WRITTEN'),
    ((select nextval('lesson_link_id_seq')), 'https://zeev.it/blog/clean-code/', 1, 2, 'WRITTEN'),
    ((select nextval('lesson_link_id_seq')), 'https://www.youtube.com/watch?v=7EmboKQH8lM&list=PLmmYSbUCWJ4x1GO839azG_BBw8rkh-zOj', 1, 3, 'VIDEO'),
    ((select nextval('lesson_link_id_seq')), 'https://www.youtube.com/watch?v=Jw3oqUyPsL', 1, 4, 'VIDEO'),
    ((select nextval('lesson_link_id_seq')), 'https://blog.geekhunter.com.br/design-patterns/', 2, 1, 'WRITTEN'),
    ((select nextval('lesson_link_id_seq')), 'https://refactoring.guru/design-patterns', 2, 2, 'WRITTEN'),
    ((select nextval('lesson_link_id_seq')), 'https://www.youtube.com/watch?v=tv-_1er1mWI', 2, 3, 'VIDEO'),
    ((select nextval('lesson_link_id_seq')), 'https://www.youtube.com/watch?v=mE3qTp1TEbg&list=PLlsmxlJgn1HJpa28yHzkBmUY-Ty71ZUGc', 2, 4, 'VIDEO');