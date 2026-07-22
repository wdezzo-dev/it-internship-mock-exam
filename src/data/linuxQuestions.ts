import { Question } from '../types';

export const linuxQuestions: Question[] = [
  {
    id: 'linux-1',
    question: 'Which command lists files in a directory?',
    options: ['dir', 'ls', 'list', 'show'],
    correctAnswer: 1,
    explanation: '`ls` (list) displays the contents of a directory. Common options: -l (long format), -a (all including hidden).'
  },
  {
    id: 'linux-2',
    question: 'What does `cd ..` do?',
    options: [
      'Deletes the parent directory',
      'Changes to the parent directory',
      'Shows parent directory contents',
      'Creates a new directory'
    ],
    correctAnswer: 1,
    explanation: '`cd ..` changes the current working directory to the parent directory (one level up).'
  },
  {
    id: 'linux-3',
    question: 'What does `pwd` stand for and do?',
    options: [
      'Password - sets user password',
      'Print Working Directory - shows the current directory path',
      'Program Working Directory',
      'Process Working Directory'
    ],
    correctAnswer: 1,
    explanation: '`pwd` (Print Working Directory) displays the full path of the current working directory.'
  },
  {
    id: 'linux-4',
    question: 'Which command creates a new directory?',
    options: ['mkdir', 'newdir', 'makedir', 'createdir'],
    correctAnswer: 0,
    explanation: '`mkdir` (make directory) creates new directories. Use `mkdir -p` to create parent directories as needed.'
  },
  {
    id: 'linux-5',
    question: 'What does `rm -rf` do?',
    options: [
      'Removes files safely',
      'Recursively force-deletes files and directories without confirmation',
      'Reads and formats files',
      'Renames files'
    ],
    correctAnswer: 1,
    explanation: '`rm -rf` recursively (-r) force-deletes (-f) files and directories without prompting. Use with extreme caution!'
  },
  {
    id: 'linux-6',
    question: 'Which command copies files?',
    options: ['cp', 'copy', 'mv', 'dup'],
    correctAnswer: 0,
    explanation: '`cp` copies files or directories. Use `cp -r` for recursive copying of directories.'
  },
  {
    id: 'linux-7',
    question: 'Which command moves or renames files?',
    options: ['mv', 'move', 'cp', 'ren'],
    correctAnswer: 0,
    explanation: '`mv` moves or renames files and directories.'
  },
  {
    id: 'linux-8',
    question: 'What does `chmod 755 filename` do?',
    options: [
      'Deletes the file',
      'Sets permissions: owner=rwx, group=r-x, others=r-x',
      'Moves the file',
      'Copies the file'
    ],
    correctAnswer: 1,
    explanation: 'chmod 755 sets: owner (7=rwx), group (5=r-x), others (5=r-x). Numeric: 4=r, 2=w, 1=x.'
  },
  {
    id: 'linux-9',
    question: 'Who can execute a file with permissions `rwxr-x---`?',
    options: [
      'Everyone',
      'Owner and group members only',
      'Only the owner',
      'No one'
    ],
    correctAnswer: 1,
    explanation: 'rwxr-x--- means: owner (rwx) can execute, group (r-x) can execute, others (---) cannot. So owner and group.'
  },
  {
    id: 'linux-10',
    question: 'What does `chown` do?',
    options: [
      'Changes file permissions',
      'Changes the owner (and optionally group) of a file',
      'Changes file content',
      'Changes file name'
    ],
    correctAnswer: 1,
    explanation: '`chown` changes the owner and/or group of a file. Example: `chown user:group file`'
  },
  {
    id: 'linux-11',
    question: 'What does the `grep` command do?',
    options: [
      'Creates a file',
      'Searches for text patterns in files',
      'Deletes matching lines',
      'Formats text'
    ],
    correctAnswer: 1,
    explanation: '`grep` searches for patterns in files using regular expressions. Common options: -i (case-insensitive), -r (recursive).'
  },
  {
    id: 'linux-12',
    question: 'What does the pipe operator `|` do?',
    options: [
      'Creates a pipe file',
      'Passes the output of one command as input to another',
      'Splits a file',
      'Connects to a server'
    ],
    correctAnswer: 1,
    explanation: 'The pipe `|` connects commands: the output of the left command becomes the input of the right command.'
  },
  {
    id: 'linux-13',
    question: 'What does `>` do in shell?',
    options: [
      'Compares values',
      'Redirects output to a file, overwriting it',
      'Appends to a file',
      'Sends data over network'
    ],
    correctAnswer: 1,
    explanation: '`>` redirects output to a file, overwriting it. Use `>>` to append instead.'
  },
  {
    id: 'linux-14',
    question: 'What does `ps aux` show?',
    options: [
      'Auxiliary system information',
      'Detailed list of all running processes',
      'User accounts',
      'Network connections'
    ],
    correctAnswer: 1,
    explanation: '`ps aux` shows detailed information about all running processes (a=all, u=user-oriented, x=including non-terminal).'
  },
  {
    id: 'linux-15',
    question: 'What does the `kill` command do?',
    options: [
      'Shuts down the system',
      'Sends a signal to a process (typically to terminate it)',
      'Deletes a file',
      'Stops a service'
    ],
    correctAnswer: 1,
    explanation: '`kill` sends signals to processes. By default sends SIGTERM (15). `kill -9` sends SIGKILL to force termination.'
  },
  {
    id: 'linux-16',
    question: 'What is the root user in Linux?',
    options: [
      'A regular user',
      'The superuser with UID 0 and full system access',
      'The first user created',
      'A network administrator'
    ],
    correctAnswer: 1,
    explanation: 'The root user (UID 0) is the superuser with unrestricted access to all commands, files, and resources.'
  },
  {
    id: 'linux-17',
    question: 'What does `sudo` do?',
    options: [
      'Switches to super user permanently',
      'Executes a command with superuser (root) privileges',
      'Creates a new user',
      'Saves data'
    ],
    correctAnswer: 1,
    explanation: '`sudo` (super user do) executes a command with root privileges, after authenticating the current user.'
  },
  {
    id: 'linux-18',
    question: 'What does `top` or `htop` show?',
    options: [
      'Top files by size',
      'Real-time view of running processes, CPU, and memory usage',
      'Top network connections',
      'System temperature'
    ],
    correctAnswer: 1,
    explanation: 'top/htop displays real-time system statistics: running processes, CPU usage, memory usage, and system load.'
  },
  {
    id: 'linux-19',
    question: 'What does the `df -h` command show?',
    options: [
      'Disk format information',
      'Disk space usage in human-readable format',
      'Directory files',
      'Default file settings'
    ],
    correctAnswer: 1,
    explanation: '`df -h` (disk free, human-readable) displays disk space usage of mounted filesystems in GB/MB.'
  },
  {
    id: 'linux-20',
    question: 'What does `du -sh *` show?',
    options: [
      'Network speed',
      'Disk usage of each item in the current directory, summarized',
      'Number of users',
      'Default shell settings'
    ],
    correctAnswer: 1,
    explanation: '`du -sh *` (disk usage, summary, human-readable) shows total size of each item in the current directory.'
  },
  {
    id: 'linux-21',
    question: 'What is the `/etc/passwd` file used for?',
    options: [
      'Stores user passwords',
      'Stores user account information (username, UID, GID, home dir, shell)',
      'System configuration',
      'Network settings'
    ],
    correctAnswer: 1,
    explanation: '/etc/passwd stores user account information. Actual passwords are stored (hashed) in /etc/shadow.'
  },
  {
    id: 'linux-22',
    question: 'What is the difference between `locate` and `find`?',
    options: [
      'No difference',
      'locate uses a pre-built database (fast); find searches the filesystem in real-time (thorough)',
      'find is faster',
      'locate only finds files'
    ],
    correctAnswer: 1,
    explanation: 'locate queries a pre-built database (fast but may be outdated). find searches the live filesystem (slower but always current).'
  },
  {
    id: 'linux-23',
    question: 'What does `tail -f` do?',
    options: [
      'Deletes the file',
      'Displays the last lines of a file and updates in real-time as it grows',
      'Edits the file',
      'Formats the file'
    ],
    correctAnswer: 1,
    explanation: '`tail -f` (follow) displays the end of a file and continues to output new lines as they are added. Great for log monitoring.'
  },
  {
    id: 'linux-24',
    question: 'What does the `cat` command do?',
    options: [
      'Compresses files',
      'Concatenates and displays file contents',
      'Creates archives',
      'Calculates totals'
    ],
    correctAnswer: 1,
    explanation: '`cat` (concatenate) displays file contents. Can combine multiple files: `cat file1 file2`.'
  },
  {
    id: 'linux-25',
    question: 'What is the difference between soft link and hard link?',
    options: [
      'No difference',
      'Soft link is a shortcut; hard link is another name for the same file data (same inode)',
      'Hard link is a shortcut',
      'Soft links work across filesystems only'
    ],
    correctAnswer: 1,
    explanation: 'Soft links (symlinks) are shortcuts pointing to a path. Hard links share the same inode (file data) but cannot cross filesystems.'
  },
  {
    id: 'linux-26',
    question: 'What does `systemctl` do?',
    options: [
      'Controls system settings',
      'Manages systemd services (start, stop, enable, status)',
      'Monitors system performance',
      'Controls system updates'
    ],
    correctAnswer: 1,
    explanation: '`systemctl` is the command to manage systemd services: start, stop, restart, enable, disable, status.'
  },
  {
    id: 'linux-27',
    question: 'What does `apt` or `yum` do?',
    options: [
      'Monitors processes',
      'Package managers for installing/updating/removing software',
      'Network tools',
      'System backup tools'
    ],
    correctAnswer: 1,
    explanation: 'apt (Debian/Ubuntu) and yum/dnf (RHEL/CentOS) are package managers that install, update, and remove software packages.'
  },
  {
    id: 'linux-28',
    question: 'What is a shell script?',
    options: [
      'A shell program',
      'A text file containing a sequence of shell commands',
      'A system log',
      'A type of database'
    ],
    correctAnswer: 1,
    explanation: 'A shell script is a text file containing a sequence of shell commands, typically starting with `#!/bin/bash` (shebang).'
  },
  {
    id: 'linux-29',
    question: 'What does `chmod +x script.sh` do?',
    options: [
      'Deletes the script',
      'Makes the script executable',
      'Edits the script',
      'Creates a copy'
    ],
    correctAnswer: 1,
    explanation: '`chmod +x` adds execute permission to a file, making it runnable as a program/script.'
  },
  {
    id: 'linux-30',
    question: 'What does `&` at the end of a command do?',
    options: [
      'Runs as admin',
      'Runs the command in the background',
      'Connects two commands',
      'Appends to a file'
    ],
    correctAnswer: 1,
    explanation: 'Appending `&` runs the command in the background, freeing the terminal for other commands.'
  },
  {
    id: 'linux-31',
    question: 'What does `nohup` do?',
    options: [
      'Prevents file deletion',
      'Runs a command that continues even after the terminal closes',
      'Disables user input',
      'Blocks network access'
    ],
    correctAnswer: 1,
    explanation: '`nohup` (no hang up) allows a command to continue running after the terminal session ends.'
  },
  {
    id: 'linux-32',
    question: 'What is the difference between `>` and `>>`?',
    options: [
      'No difference',
      '`>` overwrites the file; `>>` appends to the file',
      '`>>` overwrites; `>` appends',
      '`>` is for input, `>>` is for output'
    ],
    correctAnswer: 1,
    explanation: '`>` redirects output and overwrites the file. `>>` redirects output and appends to the file.'
  },
  {
    id: 'linux-33',
    question: 'What does `tar -czvf archive.tar.gz folder/` do?',
    options: [
      'Extracts an archive',
      'Creates a compressed gzip archive of a folder',
      'Lists archive contents',
      'Deletes the folder'
    ],
    correctAnswer: 1,
    explanation: '`tar -czvf`: c=create, z=gzip compress, v=verbose, f=file. Creates a compressed archive.'
  },
  {
    id: 'linux-34',
    question: 'What does `tar -xzvf archive.tar.gz` do?',
    options: [
      'Creates an archive',
      'Extracts a compressed archive',
      'Compresses a file',
      'Lists contents'
    ],
    correctAnswer: 1,
    explanation: '`tar -xzvf`: x=extract, z=gzip, v=verbose, f=file. Extracts a compressed archive.'
  },
  {
    id: 'linux-35',
    question: 'What is a cron job?',
    options: [
      'A one-time task',
      'A scheduled task that runs automatically at specified times',
      'A type of process',
      'A network service'
    ],
    correctAnswer: 1,
    explanation: 'Cron is a scheduler that runs jobs at specified times/dates, configured in crontab files.'
  },
  {
    id: 'linux-36',
    question: 'What does `wget` do?',
    options: [
      'Uploads files',
      'Downloads files from the web (non-interactive)',
      'Displays web pages',
      'Tests websites'
    ],
    correctAnswer: 1,
    explanation: '`wget` downloads files from the web non-interactively, supporting HTTP, HTTPS, and FTP.'
  },
  {
    id: 'linux-37',
    question: 'What does `curl` do?',
    options: [
      'Formats text',
      'Transfers data from/to a server using various protocols (HTTP, FTP)',
      'Curls a cable',
      'Formats code'
    ],
    correctAnswer: 1,
    explanation: '`curl` transfers data using various protocols. Commonly used to make HTTP requests, test APIs.'
  },
  {
    id: 'linux-38',
    question: 'What does `ssh user@host` do?',
    options: [
      'Copies files',
      'Connects to a remote host securely as the specified user',
      'Creates a user',
      'Tests network'
    ],
    correctAnswer: 1,
    explanation: '`ssh user@host` establishes a secure encrypted connection to a remote host as the specified user.'
  },
  {
    id: 'linux-39',
    question: 'What does `scp` do?',
    options: [
      'Securely connects to shell',
      'Securely copies files between hosts using SSH',
      'Scans for ports',
      'Checks permissions'
    ],
    correctAnswer: 1,
    explanation: '`scp` (secure copy) copies files between hosts using SSH for encryption.'
  },
  {
    id: 'linux-40',
    question: 'What does `rsync` do?',
    options: [
      'Synchronizes system clocks',
      'Efficiently synchronizes files/directories between locations',
      'Resets system',
      'Runs scripts'
    ],
    correctAnswer: 1,
    explanation: '`rsync` efficiently synchronizes files between locations by transferring only differences.'
  },
  {
    id: 'linux-41',
    question: 'What is the `/etc/fstab` file used for?',
    options: [
      'Network configuration',
      'Defines filesystems to be mounted at boot',
      'User accounts',
      'System logs'
    ],
    correctAnswer: 1,
    explanation: '/etc/fstab lists filesystems to mount at boot, specifying device, mount point, filesystem type, and options.'
  },
  {
    id: 'linux-42',
    question: 'What does `mount` do?',
    options: [
      'Creates a file',
      'Attaches a filesystem to the directory tree',
      'Creates a directory',
      'Formats a drive'
    ],
    correctAnswer: 1,
    explanation: '`mount` attaches a filesystem (like a partition or USB drive) to the directory tree at a mount point.'
  },
  {
    id: 'linux-43',
    question: 'What is the `PATH` environment variable?',
    options: [
      'Current directory',
      'List of directories where the shell looks for executable programs',
      'User home directory',
      'System root directory'
    ],
    correctAnswer: 1,
    explanation: 'PATH is an environment variable containing directories the shell searches when you type a command.'
  },
  {
    id: 'linux-44',
    question: 'What does `env` command show?',
    options: [
      'Environment setup',
      'All current environment variables',
      'Installed packages',
      'System info'
    ],
    correctAnswer: 1,
    explanation: '`env` displays all current environment variables and their values.'
  },
  {
    id: 'linux-45',
    question: 'What does `history` do?',
    options: [
      'Shows system logs',
      'Displays previously executed commands',
      'Shows file history',
      'Displays boot history'
    ],
    correctAnswer: 1,
    explanation: '`history` shows the list of previously executed commands. Use `!n` to re-run command number n.'
  },
  {
    id: 'linux-46',
    question: 'What does `alias` do?',
    options: [
      'Creates a new user',
      'Creates a shortcut for a command or command sequence',
      'Lists aliases',
      'Removes a command'
    ],
    correctAnswer: 1,
    explanation: '`alias` creates shortcuts: `alias ll="ls -la"` lets you type `ll` instead of the full command.'
  },
  {
    id: 'linux-47',
    question: 'What does `echo $USER` do?',
    options: [
      'Creates a user',
      'Prints the current username',
      'Sets the user variable',
      'Logs out the user'
    ],
    correctAnswer: 1,
    explanation: '`echo $USER` prints the value of the USER environment variable (current username).'
  },
  {
    id: 'linux-48',
    question: 'What does `wc -l` do?',
    options: [
      'Word count',
      'Counts lines in a file',
      'Word list',
      'Writes content'
    ],
    correctAnswer: 1,
    explanation: '`wc -l` (word count -lines) counts the number of lines in a file or input.'
  },
  {
    id: 'linux-49',
    question: 'What does `awk` do?',
    options: [
      'Wakes up processes',
      'A powerful text processing tool for pattern scanning and data extraction',
      'Archives files',
      'Encrypts data'
    ],
    correctAnswer: 1,
    explanation: '`awk` is a text processing language used for pattern matching, data extraction, and report generation.'
  },
  {
    id: 'linux-50',
    question: 'What does `sed` do?',
    options: [
      'Edits system files',
      'A stream editor for transforming text using pattern matching',
      'Secures data',
      'Sends emails'
    ],
    correctAnswer: 1,
    explanation: '`sed` (stream editor) transforms text using pattern matching, commonly used for find-replace operations.'
  }
];
