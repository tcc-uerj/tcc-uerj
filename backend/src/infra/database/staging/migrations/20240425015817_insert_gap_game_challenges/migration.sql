-- Insert initial data
insert into challenge_question (id, challenge_id, statement_title, statement_code, type)
values
    (nextval('challenge_question_id_seq'), 1, 'Evitando funções longas', 'Em clean code, devemos evitar funções muito ____________, que fazem mais do que uma única tarefa.', 'GAP_GAME'),
    (nextval('challenge_question_id_seq'), 1, 'Princípio do DRY', 'Um dos princípios do clean code é o DRY, que significa Don''t Repeat _______.', 'GAP_GAME'),
    (nextval('challenge_question_id_seq'), 1, 'Nomes significativos', 'Para manter o código limpo, devemos escolher nomes de variáveis, funções e classes que sejam ____________ e descritivos.', 'GAP_GAME'),
    (nextval('challenge_question_id_seq'), 2, 'Mantendo funções abstratas', 'Uma prática comum em clean code é manter as funções com um único nível de ____________.', 'GAP_GAME'),
    (nextval('challenge_question_id_seq'), 2, 'Importância das convenções de formatação', 'Para garantir a legibilidade do código, é importante seguir as ____________ de formatação, como indentação e espaçamento consistente.', 'GAP_GAME'),
    (nextval('challenge_question_id_seq'), 2, 'Reduzindo o uso de comentários', 'Segundo os princípios do clean code, devemos evitar o uso excessivo de ____________.', 'GAP_GAME'),
    (nextval('challenge_question_id_seq'), 3, 'Facilidade de leitura do código', 'Uma das características do código limpo é a facilidade de ____________, o que significa que podemos entender rapidamente o que ele faz.', 'GAP_GAME'),
    (nextval('challenge_question_id_seq'), 3, 'Funções com propósito único', 'Em clean code, é recomendado que cada função tenha um único ____________, fazendo apenas uma coisa e fazendo bem.', 'GAP_GAME'),
    (nextval('challenge_question_id_seq'), 3, 'Evitando acoplamento forte', 'Um dos princípios do clean code é evitar o acoplamento ____________, onde as classes dependem muito umas das outras.', 'GAP_GAME'),
    (nextval('challenge_question_id_seq'), 3, 'Ênfase em testes automáticos', 'O clean code enfatiza a importância de escrever testes ____________, que garantem que o código funcione conforme o esperado.', 'GAP_GAME'),
    (nextval('challenge_question_id_seq'), 1, 'Padrão Factory', 'O padrão ____________ é usado para criar objetos de um tipo específico sem expor a lógica de criação diretamente ao cliente.', 'GAP_GAME'),
    (nextval('challenge_question_id_seq'), 1, 'Organização em árvore hierárquica', 'No padrão ____________, objetos são organizados em uma árvore hierárquica, onde cada nó pode ter zero ou mais nós filhos.', 'GAP_GAME'),
    (nextval('challenge_question_id_seq'), 1, 'Padrão Visitor', 'O padrão ____________ é usado para representar uma operação a ser realizada nos elementos de uma estrutura de objetos.', 'GAP_GAME'),
    (nextval('challenge_question_id_seq'), 2, 'Garantindo uma única instância', 'O padrão ____________ é usado para garantir que um objeto tenha apenas uma instância e fornecer um ponto global de acesso a essa instância.', 'GAP_GAME'),
    (nextval('challenge_question_id_seq'), 2, 'Encapsulando algoritmos intercambiáveis', 'O padrão ____________ é usado para definir uma família de algoritmos, encapsular cada um deles e torná-los intercambiáveis.', 'GAP_GAME'),
    (nextval('challenge_question_id_seq'), 2, 'Fornecendo uma interface unificada', 'O padrão ____________ é usado para fornecer uma interface unificada para um conjunto de interfaces em um subsistema.', 'GAP_GAME'),
    (nextval('challenge_question_id_seq'), 3, 'Encapsulamento de comportamento', 'No padrão ____________, um objeto é usado para encapsular todos os detalhes de um comportamento em particular.', 'GAP_GAME'),
    (nextval('challenge_question_id_seq'), 3, 'Alterando comportamento conforme estado interno', 'O padrão ____________ é usado para permitir que um objeto altere seu comportamento quando seu estado interno muda.', 'GAP_GAME'),
    (nextval('challenge_question_id_seq'), 3, 'Controlando acesso a objetos', 'No padrão ____________, um objeto representa outro objeto para controlar o acesso a ele.', 'GAP_GAME'),
    (nextval('challenge_question_id_seq'), 3, 'Separando lógica de negócios e representação', 'O padrão ____________ é usado para separar a lógica de negócios de uma aplicação de sua representação.', 'GAP_GAME');

insert into question_options (id, quiz, is_correct_answer, challenge_question_id)
values
    (nextval('question_options_id_seq'), 'curtas', false, 21),
    (nextval('question_options_id_seq'), 'complexas', true, 21),
    (nextval('question_options_id_seq'), 'repetitivas', false, 21),
    (nextval('question_options_id_seq'), 'simples', false, 21),
    (nextval('question_options_id_seq'), 'Yourself', true, 22),
    (nextval('question_options_id_seq'), 'Your Code', false, 22),
    (nextval('question_options_id_seq'), 'the Code', false, 22),
    (nextval('question_options_id_seq'), 'Yourself Again', false, 22),
    (nextval('question_options_id_seq'), 'curtos', false, 23),
    (nextval('question_options_id_seq'), 'aleatórios', false, 23),
    (nextval('question_options_id_seq'), 'significativos', true, 23),
    (nextval('question_options_id_seq'), 'abstratos', false, 23),
    (nextval('question_options_id_seq'), 'complexidade', false, 24),
    (nextval('question_options_id_seq'), 'abstração', true, 24),
    (nextval('question_options_id_seq'), 'encapsulamento', false, 24),
    (nextval('question_options_id_seq'), 'recursão', false, 24),
    (nextval('question_options_id_seq'), 'convenções', true, 25),
    (nextval('question_options_id_seq'), 'exceções', false, 25),
    (nextval('question_options_id_seq'), 'regras', false, 25),
    (nextval('question_options_id_seq'), 'instruções', false, 25),
    (nextval('question_options_id_seq'), 'comentários', true, 26),
    (nextval('question_options_id_seq'), 'testes', false, 26),
    (nextval('question_options_id_seq'), 'espaçamento', false, 26),
    (nextval('question_options_id_seq'), 'variáveis', false, 26),
    (nextval('question_options_id_seq'), 'leitura', true, 27),
    (nextval('question_options_id_seq'), 'compilação', false, 27),
    (nextval('question_options_id_seq'), 'depuração', false, 27),
    (nextval('question_options_id_seq'), 'execução', false, 27),
    (nextval('question_options_id_seq'), 'objetivo', false, 28),
    (nextval('question_options_id_seq'), 'parâmetro', false, 28),
    (nextval('question_options_id_seq'), 'retorno', false, 28),
    (nextval('question_options_id_seq'), 'propósito', true, 28),
    (nextval('question_options_id_seq'), 'forte', true, 29),
    (nextval('question_options_id_seq'), 'fraco', false, 29),
    (nextval('question_options_id_seq'), 'médio', false, 29),
    (nextval('question_options_id_seq'), 'total', false, 29),
    (nextval('question_options_id_seq'), 'automáticos', true, 30),
    (nextval('question_options_id_seq'), 'manuais', false, 30),
    (nextval('question_options_id_seq'), 'aleatórios', false, 30),
    (nextval('question_options_id_seq'), 'ocasionais', false, 30),
    (nextval('question_options_id_seq'), 'Singleton', false, 31),
    (nextval('question_options_id_seq'), 'Factory', true, 31),
    (nextval('question_options_id_seq'), 'Observer', false, 31),
    (nextval('question_options_id_seq'), 'Adapter', false, 31),
    (nextval('question_options_id_seq'), 'Singleton', false, 32),
    (nextval('question_options_id_seq'), 'Composite', true, 32),
    (nextval('question_options_id_seq'), 'Observer', false, 32),
    (nextval('question_options_id_seq'), 'Strategy', false, 32),
    (nextval('question_options_id_seq'), 'Strategy', false, 33),
    (nextval('question_options_id_seq'), 'Decorator', false, 33),
    (nextval('question_options_id_seq'), 'Visitor', true, 33),
    (nextval('question_options_id_seq'), 'Prototype', false, 33),
    (nextval('question_options_id_seq'), 'Singleton', true, 34),
    (nextval('question_options_id_seq'), 'Factory', false, 34),
    (nextval('question_options_id_seq'), 'Observer', false, 34),
    (nextval('question_options_id_seq'), 'Adapter', false, 34),
    (nextval('question_options_id_seq'), 'Strategy', true, 35),
    (nextval('question_options_id_seq'), 'Decorator', false, 35),
    (nextval('question_options_id_seq'), 'Observer', false, 35),
    (nextval('question_options_id_seq'), 'Adapter', false, 35),
    (nextval('question_options_id_seq'), 'Singleton', false, 36),
    (nextval('question_options_id_seq'), 'Factory', false, 36),
    (nextval('question_options_id_seq'), 'Observer', false, 36),
    (nextval('question_options_id_seq'), 'Facade', true, 36),
    (nextval('question_options_id_seq'), 'Factory', false, 37),
    (nextval('question_options_id_seq'), 'Decorator', true, 37),
    (nextval('question_options_id_seq'), 'Observer', false, 37),
    (nextval('question_options_id_seq'), 'Proxy', false, 37),
    (nextval('question_options_id_seq'), 'Observer', false, 38),
    (nextval('question_options_id_seq'), 'Strategy', false, 38),
    (nextval('question_options_id_seq'), 'State', true, 38),
    (nextval('question_options_id_seq'), 'Command', false, 38),
    (nextval('question_options_id_seq'), 'Proxy', true, 39),
    (nextval('question_options_id_seq'), 'Adapter', false, 39),
    (nextval('question_options_id_seq'), 'Bridge', false, 39),
    (nextval('question_options_id_seq'), 'Composite', false, 39),
    (nextval('question_options_id_seq'), 'Factory', false, 40),
    (nextval('question_options_id_seq'), 'Strategy', false, 40),
    (nextval('question_options_id_seq'), 'Observer', false, 40),
    (nextval('question_options_id_seq'), 'MVC (Model-View-Controller)', true, 40);
