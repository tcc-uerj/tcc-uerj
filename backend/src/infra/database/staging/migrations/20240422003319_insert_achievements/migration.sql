-- Insert initial data
insert into achievement (id, type, description)
values
    ((select nextval('achievement_id_seq')), 'LESSON_CLEAN_CODE', 'Completou a aula de Clean Code'),
    ((select nextval('achievement_id_seq')), 'LESSON_DESIGN_PATTERN', 'Completou a aula de Design Pattern'),
    ((select nextval('achievement_id_seq')), 'CHALLENGE_CLEAN_CODE_LVL_1', 'Completou os jogos de level 1 de Clean Code'),
    ((select nextval('achievement_id_seq')), 'CHALLENGE_CLEAN_CODE_LVL_2', 'Completou os jogos de level 2 de Clean Code'),
    ((select nextval('achievement_id_seq')), 'CHALLENGE_CLEAN_CODE_LVL_3', 'Completou os jogos de level 3 de Clean Code'),
    ((select nextval('achievement_id_seq')), 'CHALLENGE_DESIGN_PATTERN_LVL_1', 'Completou os jogos de level 1 de Design Pattern'),
    ((select nextval('achievement_id_seq')), 'CHALLENGE_DESIGN_PATTERN_LVL_2', 'Completou os jogos de level 2 de Design Pattern'),
    ((select nextval('achievement_id_seq')), 'CHALLENGE_DESIGN_PATTERN_LVL_3', 'Completou os jogos de level 3 de Design Pattern'),
    ((select nextval('achievement_id_seq')), 'GAMES_COMPLETED_10', 'Completou 10 jogos'),
    ((select nextval('achievement_id_seq')), 'GAMES_COMPLETED_50', 'Completou 50 jogos'),
    ((select nextval('achievement_id_seq')), 'GAMES_COMPLETED_100', 'Completou 100 jogos');