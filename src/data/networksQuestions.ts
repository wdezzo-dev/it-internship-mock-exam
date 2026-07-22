import { Question } from '../types';

export const networksQuestions: Question[] = [
  {
    id: 'net-1',
    question: 'What does the TCP/IP model have that the OSI model doesn\'t explicitly separate?',
    options: ['Application and Presentation layers combined', 'Network and Data Link layers combined', 'Session layer merged into Application', 'Physical layer removed'],
    correctAnswer: 2,
    explanation: 'The TCP/IP model combines OSI\'s Application, Presentation, and Session layers into a single Application layer.'
  },
  {
    id: 'net-2',
    question: 'Which protocol operates at the Transport layer and provides reliable, connection-oriented communication?',
    options: ['UDP', 'TCP', 'IP', 'HTTP'],
    correctAnswer: 1,
    explanation: 'TCP (Transmission Control Protocol) operates at Layer 4 (Transport) and provides reliable, ordered, error-checked delivery of data.'
  },
  {
    id: 'net-3',
    question: 'What port does HTTPS use by default?',
    options: ['80', '443', '8080', '21'],
    correctAnswer: 1,
    explanation: 'HTTPS uses port 443 by default. HTTP uses port 80.'
  },
  {
    id: 'net-4',
    question: 'What is the purpose of ARP (Address Resolution Protocol)?',
    options: [
      'Resolves domain names to IP addresses',
      'Maps IP addresses to MAC addresses on a local network',
      'Routes packets between networks',
      'Assigns IP addresses to devices'
    ],
    correctAnswer: 1,
    explanation: 'ARP resolves IPv4 addresses to MAC addresses on a local network segment, enabling layer-2 communication.'
  },
  {
    id: 'net-5',
    question: 'What is the purpose of DNS?',
    options: [
      'Assigns IP addresses dynamically',
      'Translates domain names to IP addresses',
      'Encrypts network traffic',
      'Routes packets between networks'
    ],
    correctAnswer: 1,
    explanation: 'DNS (Domain Name System) translates human-readable domain names (google.com) to IP addresses computers use.'
  },
  {
    id: 'net-6',
    question: 'Which DNS record type maps a domain to an IPv4 address?',
    options: ['AAAA', 'A', 'CNAME', 'MX'],
    correctAnswer: 1,
    explanation: 'A records map domain names to IPv4 addresses. AAAA records map to IPv6 addresses.'
  },
  {
    id: 'net-7',
    question: 'What is a subnet mask used for?',
    options: [
      'Encrypting network traffic',
      'Distinguishing the network portion from the host portion of an IP address',
      'Assigning IP addresses dynamically',
      'Routing packets between networks'
    ],
    correctAnswer: 1,
    explanation: 'A subnet mask divides an IP address into network and host portions, defining the size of the network.'
  },
  {
    id: 'net-8',
    question: 'What does CIDR notation /24 mean?',
    options: [
      '24 hosts maximum',
      '24-bit network prefix (255.255.255.0 subnet mask)',
      'Port 24 is open',
      '24 VLANs allowed'
    ],
    correctAnswer: 1,
    explanation: '/24 means the first 24 bits are the network portion, giving a subnet mask of 255.255.255.0 and 254 usable hosts.'
  },
  {
    id: 'net-9',
    question: 'Which layer of the OSI model does a router operate at?',
    options: ['Layer 2 (Data Link)', 'Layer 3 (Network)', 'Layer 4 (Transport)', 'Layer 5 (Session)'],
    correctAnswer: 1,
    explanation: 'Routers operate at Layer 3 (Network) of the OSI model, routing packets between different networks using IP addresses.'
  },
  {
    id: 'net-10',
    question: 'Which layer does a switch operate at?',
    options: ['Layer 1 (Physical)', 'Layer 2 (Data Link)', 'Layer 3 (Network)', 'Layer 4 (Transport)'],
    correctAnswer: 1,
    explanation: 'Traditional switches operate at Layer 2 (Data Link), forwarding frames based on MAC addresses.'
  },
  {
    id: 'net-11',
    question: 'What is the difference between a hub and a switch?',
    options: [
      'No difference',
      'A hub broadcasts to all ports; a switch sends only to the destination port',
      'A switch is slower than a hub',
      'A hub is more intelligent'
    ],
    correctAnswer: 1,
    explanation: 'Hubs broadcast data to all connected devices (causing collisions). Switches intelligently forward data only to the intended recipient.'
  },
  {
    id: 'net-12',
    question: 'What is NAT (Network Address Translation)?',
    options: [
      'Network Authentication Technology',
      'Translates private IP addresses to public IP addresses for internet access',
      'A routing protocol',
      'A type of firewall'
    ],
    correctAnswer: 1,
    explanation: 'NAT translates private IP addresses to public IP addresses (and vice versa), allowing multiple devices to share one public IP.'
  },
  {
    id: 'net-13',
    question: 'Which protocol is used to automatically assign IP addresses to devices?',
    options: ['DNS', 'DHCP', 'ARP', 'SNMP'],
    correctAnswer: 1,
    explanation: 'DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses and network configuration to devices.'
  },
  {
    id: 'net-14',
    question: 'What is the three-way handshake in TCP?',
    options: [
      'Client sends data, server acknowledges, client confirms',
      'SYN, SYN-ACK, ACK sequence to establish a connection',
      'Three packets exchanged for authentication',
      'Three-way encryption handshake'
    ],
    correctAnswer: 1,
    explanation: 'TCP uses a three-way handshake: client sends SYN, server responds with SYN-ACK, client confirms with ACK to establish connection.'
  },
  {
    id: 'net-15',
    question: 'What is a VLAN?',
    options: [
      'Virtual Local Area Network - logically segments a physical network',
      'Very Large Area Network',
      'Virtual LAN Adapter',
      'Video Local Access Network'
    ],
    correctAnswer: 0,
    explanation: 'A VLAN (Virtual Local Area Network) logically segments a physical network into separate broadcast domains.'
  },
  {
    id: 'net-16',
    question: 'Which protocol is used for secure remote login?',
    options: ['Telnet', 'SSH', 'FTP', 'SMTP'],
    correctAnswer: 1,
    explanation: 'SSH (Secure Shell) provides encrypted remote login and command execution, replacing insecure Telnet.'
  },
  {
    id: 'net-17',
    question: 'What is the difference between IPv4 and IPv6?',
    options: [
      'IPv6 is slower',
      'IPv4 uses 32-bit addresses; IPv6 uses 128-bit addresses',
      'IPv4 is newer',
      'IPv6 doesn\'t support routing'
    ],
    correctAnswer: 1,
    explanation: 'IPv4 uses 32-bit addresses (~4.3 billion). IPv6 uses 128-bit addresses, providing vastly more addresses.'
  },
  {
    id: 'net-18',
    question: 'What is a private IP address range?',
    options: [
      'IPs used on the public internet',
      'Reserved IP ranges for internal networks (10.x, 172.16-31.x, 192.168.x)',
      'IPs owned by governments',
      'IPs that cannot be routed anywhere'
    ],
    correctAnswer: 1,
    explanation: 'Private IP ranges (RFC 1918): 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16 - not routable on the public internet.'
  },
  {
    id: 'net-19',
    question: 'What is ICMP used for?',
    options: [
      'Transferring files',
      'Error reporting and diagnostic messages (ping, traceroute)',
      'Encrypting data',
      'Routing emails'
    ],
    correctAnswer: 1,
    explanation: 'ICMP (Internet Control Message Protocol) is used for error reporting and diagnostics, including ping and traceroute.'
  },
  {
    id: 'net-20',
    question: 'What is a DMZ in networking?',
    options: [
      'Dead zone with no signal',
      'Network segment between internal and external networks hosting public services',
      'Data Management Zone',
      'Distributed Memory Zone'
    ],
    correctAnswer: 1,
    explanation: 'A DMZ (Demilitarized Zone) is a network segment that hosts public-facing services, adding security between internal and external networks.'
  },
  {
    id: 'net-21',
    question: 'What is a MAC address?',
    options: [
      'An Apple device identifier only',
      'A unique 48-bit hardware identifier assigned to a network interface',
      'A mobile authentication code',
      'A media access controller'
    ],
    correctAnswer: 1,
    explanation: 'A MAC (Media Access Control) address is a unique 48-bit hardware identifier permanently assigned to a network interface card.'
  },
  {
    id: 'net-22',
    question: 'What does the `ping` command do?',
    options: [
      'Opens a website',
      'Tests reachability by sending ICMP echo requests and measuring round-trip time',
      'Downloads a file',
      'Connects to a server'
    ],
    correctAnswer: 1,
    explanation: 'Ping sends ICMP echo requests to a target host and measures the round-trip time of responses, testing connectivity.'
  },
  {
    id: 'net-23',
    question: 'What is the purpose of `traceroute`?',
    options: [
      'Finding files on a system',
      'Shows the path and latency of each hop to a destination',
      'Tracing code execution',
      'Mapping network topology'
    ],
    correctAnswer: 1,
    explanation: 'Traceroute displays the route and transit delays of packets across an IP network, showing each hop.'
  },
  {
    id: 'net-24',
    question: 'What is bandwidth?',
    options: [
      'The physical size of a cable',
      'The maximum data transfer rate of a network connection',
      'The amount of storage available',
      'The number of connected devices'
    ],
    correctAnswer: 1,
    explanation: 'Bandwidth is the maximum data transfer rate of a network connection, typically measured in bits per second (bps).'
  },
  {
    id: 'net-25',
    question: 'What is latency?',
    options: [
      'The speed of data transfer',
      'The time delay between sending and receiving data',
      'The amount of data transferred',
      'The size of a packet'
    ],
    correctAnswer: 1,
    explanation: 'Latency is the time delay (usually in milliseconds) between sending a request and receiving a response.'
  },
  {
    id: 'net-26',
    question: 'What is a firewall?',
    options: [
      'A physical barrier',
      'A security system that monitors and filters network traffic based on rules',
      'A type of router',
      'A backup system'
    ],
    correctAnswer: 1,
    explanation: 'A firewall monitors and controls incoming/outgoing network traffic based on predetermined security rules.'
  },
  {
    id: 'net-27',
    question: 'What is the purpose of a load balancer?',
    options: [
      'Measuring network weight',
      'Distributes incoming traffic across multiple servers for reliability and performance',
      'Compressing data',
      'Encrypting traffic'
    ],
    correctAnswer: 1,
    explanation: 'A load balancer distributes network traffic across multiple servers to ensure no single server is overwhelmed.'
  },
  {
    id: 'net-28',
    question: 'What is BGP?',
    options: [
      'Basic Gateway Protocol',
      'Border Gateway Protocol - the routing protocol of the internet',
      'Binary Gateway Protocol',
      'Broadband Gateway Protocol'
    ],
    correctAnswer: 1,
    explanation: 'BGP (Border Gateway Protocol) is the routing protocol that exchanges routing information between autonomous systems on the internet.'
  },
  {
    id: 'net-29',
    question: 'What is OSPF?',
    options: [
      'Open Shortest Path First - a link-state routing protocol',
      'Open Secure Protocol Framework',
      'Optimized System Performance Feature',
      'Online Service Provider Framework'
    ],
    correctAnswer: 0,
    explanation: 'OSPF (Open Shortest Path First) is an interior gateway routing protocol using link-state algorithm for efficient routing.'
  },
  {
    id: 'net-30',
    question: 'What is a CDN?',
    options: [
      'Central Data Network',
      'Content Delivery Network - distributed servers that deliver content from locations closest to users',
      'Cloud Distribution Network',
      'Common Domain Name'
    ],
    correctAnswer: 1,
    explanation: 'A CDN (Content Delivery Network) is a distributed network of servers that deliver content from the closest location to users.'
  },
  {
    id: 'net-31',
    question: 'What port does SSH use by default?',
    options: ['21', '22', '23', '80'],
    correctAnswer: 1,
    explanation: 'SSH uses port 22 by default. Telnet uses port 23.'
  },
  {
    id: 'net-32',
    question: 'What is the loopback address?',
    options: ['192.168.1.1', '127.0.0.1', '10.0.0.1', '0.0.0.0'],
    correctAnswer: 1,
    explanation: '127.0.0.1 (localhost) is the loopback address used to test the TCP/IP stack on the local machine.'
  },
  {
    id: 'net-33',
    question: 'What is a proxy server?',
    options: [
      'A backup server',
      'An intermediary server that forwards client requests to other servers',
      'A development server',
      'A database server'
    ],
    correctAnswer: 1,
    explanation: 'A proxy server acts as an intermediary between clients and destination servers, providing caching, filtering, and anonymity.'
  },
  {
    id: 'net-34',
    question: 'What is the purpose of a reverse proxy?',
    options: [
      'Client-side caching',
      'Sits in front of web servers, forwarding client requests and handling SSL termination',
      'Reverse engineering',
      'Proxying in the opposite direction'
    ],
    correctAnswer: 1,
    explanation: 'A reverse proxy sits in front of backend servers, handling client requests, SSL termination, load balancing, and caching.'
  },
  {
    id: 'net-35',
    question: 'What is the difference between TCP and UDP?',
    options: [
      'No difference',
      'TCP is reliable and connection-oriented; UDP is faster but unreliable',
      'UDP is more reliable',
      'TCP is for emails only'
    ],
    correctAnswer: 1,
    explanation: 'TCP provides reliable, ordered delivery with error checking. UDP is faster but doesn\'t guarantee delivery or order.'
  },
  {
    id: 'net-36',
    question: 'What is a subnet?',
    options: [
      'A submarine network',
      'A logical subdivision of an IP network',
      'A secondary network',
      'A backup network'
    ],
    correctAnswer: 1,
    explanation: 'A subnet (subnetwork) is a logical subdivision of an IP network, dividing a larger network into smaller, manageable segments.'
  },
  {
    id: 'net-37',
    question: 'What does the command `netstat` do?',
    options: [
      'Sets network statistics',
      'Displays network connections, routing tables, and interface statistics',
      'Creates new network connections',
      'Tests network speed'
    ],
    correctAnswer: 1,
    explanation: 'netstat displays active network connections, routing tables, interface statistics, and other network information.'
  },
  {
    id: 'net-38',
    question: 'What does `nslookup` do?',
    options: [
      'Looks up network status',
      'Queries DNS to obtain domain name or IP address information',
      'Checks network speed',
      'Scans network ports'
    ],
    correctAnswer: 1,
    explanation: 'nslookup queries DNS servers to obtain domain name to IP address mapping or other DNS record information.'
  },
  {
    id: 'net-39',
    question: 'What is a VPN?',
    options: [
      'Very Private Network',
      'Virtual Private Network - creates encrypted tunnel over public network',
      'Virtual Protocol Network',
      'Verified Private Network'
    ],
    correctAnswer: 1,
    explanation: 'A VPN creates an encrypted tunnel over a public network, providing secure remote access to private networks.'
  },
  {
    id: 'net-40',
    question: 'What is Quality of Service (QoS)?',
    options: [
      'Quality testing service',
      'Mechanisms to manage network resources by prioritizing certain types of traffic',
      'A quality monitoring tool',
      'Service quality certification'
    ],
    correctAnswer: 1,
    explanation: 'QoS manages network resources by prioritizing certain types of traffic (voice, video) to ensure performance.'
  },
  {
    id: 'net-41',
    question: 'What is a packet sniffer?',
    options: [
      'A device that smells packets',
      'A tool that captures and analyzes network traffic',
      'A virus scanner',
      'A firewall component'
    ],
    correctAnswer: 1,
    explanation: 'A packet sniffer (like Wireshark) captures and analyzes network packets for troubleshooting or security analysis.'
  },
  {
    id: 'net-42',
    question: 'What is the purpose of the `/etc/hosts` file in Linux?',
    options: [
      'Stores user accounts',
      'Local DNS resolution, mapping hostnames to IP addresses',
      'Stores network configuration',
      'Contains routing tables'
    ],
    correctAnswer: 1,
    explanation: '/etc/hosts is a local file that maps hostnames to IP addresses, overriding DNS for specific mappings.'
  },
  {
    id: 'net-43',
    question: 'What is the default gateway?',
    options: [
      'The first computer on a network',
      'The router IP that handles traffic destined for other networks',
      'The DHCP server',
      'The DNS server'
    ],
    correctAnswer: 1,
    explanation: 'The default gateway is the router that handles traffic destined for networks outside the local subnet.'
  },
  {
    id: 'net-44',
    question: 'What is a port in networking?',
    options: [
      'A physical connector',
      'A logical endpoint for network communication (0-65535)',
      'A type of cable',
      'A network switch'
    ],
    correctAnswer: 1,
    explanation: 'A port is a logical communication endpoint (number 0-65535) that identifies specific services on a host.'
  },
  {
    id: 'net-45',
    question: 'Which port does FTP use?',
    options: ['21', '22', '25', '80'],
    correctAnswer: 0,
    explanation: 'FTP uses port 21 for commands and port 20 for data transfer.'
  },
  {
    id: 'net-46',
    question: 'What is a broadcast address?',
    options: [
      'The first address in a subnet',
      'The last address in a subnet used to send to all hosts',
      'The router address',
      'The DNS address'
    ],
    correctAnswer: 1,
    explanation: 'A broadcast address (last address in subnet) sends packets to all hosts on that network segment.'
  },
  {
    id: 'net-47',
    question: 'What is the purpose of a MAC address table in a switch?',
    options: [
      'Stores MAC addresses of hackers',
      'Maps MAC addresses to switch ports for efficient frame forwarding',
      'Lists allowed MAC addresses',
      'Records network traffic'
    ],
    correctAnswer: 1,
    explanation: 'A switch\'s MAC address table maps learned MAC addresses to specific ports, enabling efficient frame forwarding.'
  },
  {
    id: 'net-48',
    question: 'What is port forwarding?',
    options: [
      'Shipping ports management',
      'Redirects incoming traffic from a specific port to an internal device/port',
      'Forward planning',
      'Email forwarding'
    ],
    correctAnswer: 1,
    explanation: 'Port forwarding redirects incoming traffic from a router port to a specific internal device and port.'
  },
  {
    id: 'net-49',
    question: 'What is STP (Spanning Tree Protocol)?',
    options: [
      'A tree data structure',
      'Prevents loops in switched networks by blocking redundant paths',
      'A security protocol',
      'A routing protocol'
    ],
    correctAnswer: 1,
    explanation: 'STP prevents network loops in switched environments by creating a loop-free topology and blocking redundant paths.'
  },
  {
    id: 'net-50',
    question: 'What is a collision domain?',
    options: [
      'A zone where packets collide and are destroyed',
      'A network segment where data packets can collide with each other',
      'A domain for collision detection',
      'A type of network topology'
    ],
    correctAnswer: 1,
    explanation: 'A collision domain is a network segment where data packets can collide. Switches break collision domains; hubs extend them.'
  }
];
