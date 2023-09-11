<?php

$repo = 'https://github.com/HarshitBhatt043/Jenkins-Project-Web-Arcade.git';

$games = [
    'hextris' => [
        'name' => 'Hexagonal',
        'tag' => 'tetris',
        'git' => $repo,
        'branch' => 'hextris-lite',
        'mobile' => true,
        'desktop' => true,
    ],
    'pond' => [
        'name' => 'Pond',
        'tag' => 'eat, swim',
        'git' => $repo,
        'branch' => 'pond-lite',
        'mobile' => true,
        'desktop' => true,
    ],
    '2048-lite' => [
        'name' => '2, 4, 8',
        'tag' => 'swipe',
        'git' => $repo,
        'branch' => '2048',
        'mobile' => true,
        'desktop' => true,
    ],
    '0hh1' => [
        'name' => 'Fill',
        'tag' => 'the grid',
        'git' => $repo,
        'branch' => '0hh1',
        'mobile' => true,
        'desktop' => true,
    ],
    'hexgl' => [
        'name' => 'Racing',
        'tag' => 'pod',
        'git' => $repo,
        'branch' => 'HexGL',
        'mobile' => true,
        'desktop' => true,
    ],
    'clumsy-bird' => [
        'name' => 'Flappy',
        'tag' => ' bird',
        'git' => $repo,
        'branch' => 'floppybird',
        'mobile' => true,
        'desktop' => true,
    ],
    'ns-shaft' => [
        'name' => 'Fall',
        'tag' => 'safely',
        'git' => $repo,
        'branch' => 'NS-SHAFT',
        'mobile' => true,
        'desktop' => true,
    ],
    'parity' => [
        'name' => 'Numbers',
        'tag' => 'puzzle',
        'git' => $repo,
        'branch' => 'parity',
        'mobile' => true,
        'desktop' => true,
    ],
    'hexahedral' => [
        'name' => 'Push',
        'tag' => 'all the blocks',
        'git' => $repo,
        'branch' => 'hexahedral',
        'mobile' => true,
        'desktop' => true,
    ],
    'brick-breaker' => [
        'name' => 'Brick Break',
        'tag' => 'easy',
        'git' => $repo,
        'branch' => 'swipe-brick-breaker',
        'mobile' => true,
        'desktop' => true,
    ],
    'taptaptap' => [
        'name' => 'Tap',
        'tag' => 'the blue',
        'git' => $repo,
        'branch' => 'taptaptap',
        'mobile' => true,
        'desktop' => true,
    ],
    'particle-clicker' => [
        'name' => 'Particle',
        'tag' => 'clicker',
        'git' => $repo,
        'branch' => 'particle-clicker',
        'mobile' => true,
        'desktop' => true,
    ],
    '3d.city' => [
        'name' => 'Build',
        'tag' => 'the city',
        'git' => $repo,
        'branch' => '3d.city',
        'mobile' => false,
        'desktop' => true,
    ],
    'fire-n-ice' => [
        'name' => 'Fire and ice',
        'tag' => 'NES remake',
        'git' => $repo,
        'branch' => 'fire-n-ice',
        'mobile' => true,
        'desktop' => true,
    ],
    'paint-run' => [
        'name' => 'Turn',
        'tag' => ' the tiles blue',
        'git' => $repo,
        'branch' => 'paint-run2',
        'mobile' => false,
        'desktop' => true,
    ],
    'tower' => [
        'name' => 'Build',
        'tag' => 'highest tower',
        'git' => $repo,
        'branch' => 'tower_game',
        'mobile' => true,
        'desktop' => true,
    ],
    'hyperspace' => [
        'name' => 'Garbage',
        'tag' => 'collect',
        'git' => $repo,
        'branch' => 'Hyperspace-Garbage',
        'mobile' => true,
        'desktop' => true,
    ],
    'pacman' => [
        'name' => 'Pacman',
        'tag' => '2d',
        'git' => $repo,
        'branch' => 'pacman-lite',
        'mobile' => true,
        'desktop' => true,
    ],
    'missile' => [
        'name' => 'Missile',
        'tag' => 'dodge',
        'git' => $repo,
        'branch' => 'missile',
        'mobile' => true,
        'desktop' => true,
    ],
    'templerun2' => [
        'name' => 'Take',
        'tag' => 'the idol',
        'git' => $repo,
        'branch' => 'Temple_Run_2',
        'mobile' => true,
        'desktop' => true,
    ],
    '99-balls' => [
        'name' => 'Brick Break',
        'tag' => 'hard',
        'git' => $repo,
        'branch' => '99-Balls',
        'mobile' => true,
        'desktop' => true,
    ],
    'dino' => [
        'name' => 'Dino',
        'tag' => 'run',
        'git' => $repo,
        'branch' => 'Dino',
        'mobile' => true,
        'desktop' => true,
    ],
    'tanuki' => [
        'name' => 'Tanuki',
        'tag' => 'sunset',
        'git' => $repo,
        'branch' => 'Tanuki-sunset',
        'mobile' => true,
        'desktop' => true,
    ],
    'elasticman' => [
        'name' => 'Elastic',
        'tag' => 'face',
        'git' => $repo,
        'branch' => 'Elasticman',
        'mobile' => true,
        'desktop' => true,
    ],
    'subway-sf' => [
        'name' => 'San',
        'tag' => 'francisco',
        'git' => $repo,
        'branch' => 'Subway-SF',
        'mobile' => true,
        'desktop' => true,
    ],
    'subway-ny' => [
        'name' => 'New York',
        'tag' => 'hard version',
        'git' => $repo,
        'branch' => 'Subway-NY',
        'mobile' => true,
        'desktop' => true,
    ],
    'fruit-ninja' => [
        'name' => 'Slice',
        'tag' => 'fruits',
        'git' => $repo,
        'branch' => 'Fruit-ninja',
        'mobile' => true,
        'desktop' => true,
    ],
    'fruit-ninja2' => [
        'name' => 'Slice',
        'tag' => 'more fruits',
        'git' => $repo,
        'branch' => 'Fruit-ninja2',
        'mobile' => true,
        'desktop' => true,
    ],
    'rocket-league' => [
        'name' => 'Do',
        'tag' => 'maximum goals',
        'git' => $repo,
        'branch' => 'Rocket-League',
        'mobile' => false,
        'desktop' => true,
    ],
    'pacman3d' => [
        'name' => 'Pacman',
        'tag' => '3d',
        'git' => $repo,
        'branch' => 'Pacman-3d',
        'mobile' => true,
        'desktop' => true,
    ],
    'time-sphere' => [
        'name' => 'Draw',
        'tag' => 'and win',
        'git' => $repo,
        'branch' => 'Time-Sphere',
        'mobile' => true,
        'desktop' => true,
    ],
    'adventure-drivers' => [
        'name' => 'Win',
        'tag' => 'the race',
        'git' => $repo,
        'branch' => 'Adventure-Drivers',
        'mobile' => true,
        'desktop' => true,
    ],
    'cluster-rush' => [
        'name' => 'Jump',
        'tag' => 'over trucks',
        'git' => $repo,
        'branch' => 'Cluster-Rush',
        'mobile' => false,
        'desktop' => true,
    ],
    'color-switch' => [
        'name' => 'Tap',
        'tag' => 'and pass',
        'git' => $repo,
        'branch' => 'Color-Switch',
        'mobile' => true,
        'desktop' => true,
    ],
];
