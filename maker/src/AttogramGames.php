<?php declare(strict_types=1);

namespace Attogram\Games;

use Exception;

use function chdir;
use function count;
use function file_get_contents;
use function file_put_contents;
use function htmlentities;
use function in_array;
use function is_dir;
use function is_readable;
use function is_string;
use function realpath;
use function str_replace;
use function strlen;
use function system;

class AttogramGames
{
    private $title;
    private $headline;
    private $enableInstall;
    private $buildDirectory;
    private $homeDirectory;
    private $logoDirectory;
    private $templatesDirectory;
    private $customDirectory;
    private $games;
    private $menu;
    private $css;
    private $header;
    private $footer;

    public function __construct()
    {
        global $argc, $argv;

        date_default_timezone_set('Asia/Kolkata');

        $this->title = 'Jenkins Arcade';
        $this->verbose("\n{$this->title} Builder");
        $this->verbose('');
        if ($argc === 1 || !in_array('install', $argv)) {
            $this->verbose('Usage: php build.php install');
            return;
        }

        $this->initOptions();
        $this->initDirectories();
        $this->initConfig();
        $this->initGamesList();
        $this->installGames();
        $this->initTemplates();
        $this->buildMenu();
        $this->buildIndex();
    }

    private function initOptions()
    {
        $this->verbose('INSTALLS: Enabled');
        $this->verbose('WRITE EMBED: Enabled');
        $this->verbose('WRITE INDEX: Enabled');
        $this->verbose('');
    }

    private function initDirectories()
    {
        $this->buildDirectory = realpath(__DIR__ . DIRECTORY_SEPARATOR . '..') . DIRECTORY_SEPARATOR;
        $this->templatesDirectory = $this->buildDirectory . 'templates' . DIRECTORY_SEPARATOR;
        $this->customDirectory = $this->buildDirectory . 'custom' . DIRECTORY_SEPARATOR;
        $this->homeDirectory = realpath($this->buildDirectory . '..') . DIRECTORY_SEPARATOR;
        $this->logoDirectory = $this->homeDirectory . 'logo' . DIRECTORY_SEPARATOR;
        $this->verbose('BUILD: ' . $this->buildDirectory);
        if (!is_dir($this->buildDirectory)) {
            throw new Exception('BUILD DIRECTORY NOT FOUND: ' . $this->buildDirectory);
        }
        $this->verbose('TEMPLATES: ' . $this->templatesDirectory);
        $this->verbose('CUSTOM: ' . $this->customDirectory);
        $this->verbose('HOME: ' . $this->homeDirectory);
        if (!is_dir($this->homeDirectory)) {
            throw new Exception('HOME DIRECTORY NOT FOUND: ' . $this->homeDirectory);
        }
        $this->verbose('LOGO: ' . $this->logoDirectory);
        $this->verbose('');
    }

    private function initConfig()
    {
        $configFile = 'config.php';

        $configuration = is_readable($this->customDirectory . $configFile)
            ? $this->customDirectory . $configFile
            : $this->buildDirectory . $configFile;
        $this->verbose('CONFIGURATION: ' . $configuration);
        if (!is_readable($configuration)) {
            throw new Exception('CONFIGURATION NOT FOUND: ' . $configuration);
        }
        /** @noinspection PhpIncludeInspection */
        require_once $configuration;

        $this->title = (!empty($title) && is_string($title))
            ? $title
            : $this->title;
        $this->headline = (!empty($headline) && is_string($headline))
            ? $headline
            : $this->title;
        $this->verbose('PAGE TITLE: ' . $this->title);
        $this->verbose('PAGE HEADLINE: ' . htmlentities($this->headline));
    }

    private function initGamesList()
    {
        $gamesFile = 'games.php';
        $gamesList = is_readable($this->customDirectory . $gamesFile)
            ? $this->customDirectory . $gamesFile
            : $this->buildDirectory . $gamesFile;
        $this->verbose('GAMES LIST: ' . $gamesList);
        if (!is_readable($gamesList)) {
            throw new Exception('GAMES LIST NOT FOUND: ' . $gamesList);
        }
        /** @noinspection PhpIncludeInspection */
        require_once $gamesList;

        $this->games = (!empty($games) && is_array($games))
            ? $games
            : [];
        $this->verbose('GAMES COUNT: ' . count($this->games));
        $this->verbose('');
    }

    private function installGames()
    {
        foreach ($this->games as $gameIndex => $game) {
            $gameDirectory = $this->homeDirectory . $gameIndex;
            if (is_dir($gameDirectory)) {
                $this->verbose("INSTALLED: $gameIndex: $gameDirectory");
                continue;
            }
            $this->verbose("INSTALLING: $gameIndex: $gameDirectory");
            chdir($this->homeDirectory);
            $this->executeGitCommand("git clone --single-branch --branch {$game['branch']} --depth 1 {$game['git']} $gameIndex");
            $this->buildSteps($gameIndex, $game);
        }
    }

    private function buildSteps(string $gameIndex, array $game)
    {
        $gameDirectory = $this->homeDirectory . $gameIndex;
        if (!chdir($gameDirectory)) {
            $this->verbose('ERROR: GAME DIRECTORY NOT FOUND: ' . $gameDirectory);
            return;
        }
        if (empty($game['build'])) {
            return;
        }
        foreach ($game['build'] as $step) {
            $this->executeGitCommand($step);
        }
    }

    private function initTemplates()
    {
        $this->css = $this->getTemplate('css.css');
        $this->header = $this->getTemplate('header.html');
        $this->header = $this->transposeTemplate($this->header);
        $this->footer = $this->getTemplate('footer.html');
        $this->footer = $this->transposeTemplate($this->footer);
    }

    private function getTemplate(string $file): string
    {
        $custom = is_readable($this->customDirectory . $file)
            ? file_get_contents($this->customDirectory . $file)
            : file_get_contents($this->templatesDirectory . $file);

        return $custom ?? '';
    }

    private function transposeTemplate(string $template): string
    {
        $template = str_replace('{{CSS}}', $this->css, $template);
        $template = str_replace('{{TITLE}}', $this->title, $template);
        $template = str_replace('{{HEADLINE}}', htmlentities($this->headline), $template);
        $template = str_replace('{{DATETIME_IST}}', date('Y-m-d H:i:s T'), $template);

        return $template;
    }

    private function buildMenu()
    {
        $this->menu = '<div class="list">';
        foreach ($this->games as $gameIndex => $game) {
            $this->menu .= $this->getGameMenu($gameIndex, $game);
        }
        $this->menu .= '</div>';
        $this->verbose('BUILT MENU: ' . strlen($this->menu) . ' characters');
        $this->write(
            $this->homeDirectory . 'games.html',
            "<style>{$this->css}</style>{$this->menu}\n"
        );
    }

    private function getGameMenu(string $gameIndex, array $game): string
    {
        $link = empty($game['index'])
            ? $gameIndex . '/'
            : $gameIndex . '/' . $game['index'];
        $mobile = empty($game['mobile'])
            ? ''
            : '&#128241;';  // 📱
        $desktop = empty($game['desktop'])
            ? ''
            : '&#9000;';  // ⌨
        $logo = is_readable($this->logoDirectory . $gameIndex . '.png')
            ? $gameIndex . '.png'
            : 'game.png';

        return '<a href="' . $link . '"><div class="game"><img src="logo/' . $logo
            . '" width="100" height="100" alt="' . $game['name'] . '"><br />' . $game['name']
            . '<br /><small>' . $game['tag'] . '</small>'
            . '<br /><div class="platform">' . $desktop . ' ' . $mobile . '</div>'
            . '</div></a>';
    }

    private function buildIndex()
    {
        $this->write(
            $this->homeDirectory . 'index.html',
            $this->header . $this->menu . $this->footer
        );
    }

    private function executeGitCommand(string $command)
    {
        $this->verbose('SYSTEM: ' . $command);
        chdir($this->homeDirectory);
        system($command);
    }

    private function write(string $filename, string $contents)
    {
        $this->verbose("WRITING $filename");
        $wrote = file_put_contents($filename, $contents);
        $this->verbose("WROTE $wrote CHARACTERS");
        if (!$wrote) {
            $this->verbose("ERROR WRITING TO $filename");
            $this->verbose("DUMPING:\n\n$contents\n\n");
        }
    }

    private function verbose(string $message)
    {
        print $message . "\n";
    }
}
