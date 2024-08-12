-- Insert initial data
insert into hangman_questions (id, answer, hint, subject, points)
values
    (nextval('hangman_questions_id_seq'), 'Singleton', 'Padrão que garante uma única instância de uma classe.', 'DESIGN_PATTERN', 300),
    (nextval('hangman_questions_id_seq'), 'Factory', 'Padrão que cria objetos sem expor a lógica de criação.', 'DESIGN_PATTERN', 300),
    (nextval('hangman_questions_id_seq'), 'Observer', 'Padrão que define uma dependência um-para-muitos entre objetos.', 'DESIGN_PATTERN', 300),
    (nextval('hangman_questions_id_seq'), 'Strategy', 'Padrão que permite definir uma família de algoritmos.', 'DESIGN_PATTERN', 300),
    (nextval('hangman_questions_id_seq'), 'Decorator', 'Padrão que adiciona comportamento a um objeto dinamicamente.', 'DESIGN_PATTERN', 300),
    (nextval('hangman_questions_id_seq'), 'Adapter', 'Padrão que permite que interfaces incompatíveis trabalhem juntas.', 'DESIGN_PATTERN', 300),
    (nextval('hangman_questions_id_seq'), 'Command', 'Padrão que encapsula uma solicitação como um objeto.', 'DESIGN_PATTERN', 300),
    (nextval('hangman_questions_id_seq'), 'Prototype', 'Padrão que cria novos objetos clonando uma instância.', 'DESIGN_PATTERN', 300),
    (nextval('hangman_questions_id_seq'), 'Proxy', 'Padrão que representa outro objeto para controlar o acesso.', 'DESIGN_PATTERN', 300),
    (nextval('hangman_questions_id_seq'), 'Builder', 'Padrão que separa a construção de um objeto complexo da sua representação.', 'DESIGN_PATTERN', 300),
    (nextval('hangman_questions_id_seq'), 'Legibilidade', 'Qualidade de código que facilita a leitura e compreensão.', 'CLEAN_CODE', 300),
    (nextval('hangman_questions_id_seq'), 'Refactoring', 'Processo de melhorar o código sem alterar seu comportamento externo.', 'CLEAN_CODE', 300),
    (nextval('hangman_questions_id_seq'), 'Simplicidade', 'Princípio que sugere que o código deve ser o mais simples possível.', 'CLEAN_CODE', 300),
    (nextval('hangman_questions_id_seq'), 'Coesão', 'Grau em que os elementos de um módulo pertencem juntos.', 'CLEAN_CODE', 300),
    (nextval('hangman_questions_id_seq'), 'Acoplamento', 'Grau de interdependência entre módulos.', 'CLEAN_CODE', 300),
    (nextval('hangman_questions_id_seq'), 'Naming', 'Prática de escolher nomes claros e significativos para variáveis e funções.', 'CLEAN_CODE', 300),
    (nextval('hangman_questions_id_seq'), 'Testes', 'Parte do código que assegura que o programa funcione como esperado.', 'CLEAN_CODE', 300),
    (nextval('hangman_questions_id_seq'), 'Comentários', 'Notas no código que explicam a lógica ou decisões de design.', 'CLEAN_CODE', 300),
    (nextval('hangman_questions_id_seq'), 'Modularização', 'Divisão do código em partes menores e independentes.', 'CLEAN_CODE', 300),
    (nextval('hangman_questions_id_seq'), 'DRY', 'Princípio que sugere Don''t Repeat Yourself', 'CLEAN_CODE', 300);