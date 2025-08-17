import type { Skills } from '$lib/types';
export const skills: Skills[] = [
	{
		category: 'Office',
		field: ['Microsoft Office Suite', 'Google Workspace']
	},
	{
		category: 'Adobe CC',
		field: ['Photoshop', 'Illustrator', 'Lightroom (Classic)', 'Premiere Pro', 'After Effects']
	},
	{
		category: 'Programming',
		field: ['HTML', 'SvelteKit', 'CSS', 'Tailwind CSS', 'Javascript', 'Typescript', 'Bash']
	},
	{
		category: 'Operating Systems',
		field: [
			'Windows (Server)',
			'MacOS',
			'Debian (Server)',
			'Ubuntu (Server)',
			'Arch',
			'NixOS',
			'Proxmox VE',
			'TrueNAS Scale'
		]
	},
	{
		category: 'Languages',
		field: [
			"Dutch <span class='text-xs text-neutral-400'>Native</span>",
			"English <span class='text-xs text-neutral-400'>Fluent</span>",
			"French <span class='text-xs text-neutral-400'>Basic</span>",
			"German <span class='text-xs text-neutral-400'>Basic</span>"
		]
	},
	{
		category: 'Others',
		field: [
			'Blackboard Learn',
			'Salesforce',
			'Ansible',
			'Active Directory',
			'LDAP',
			'HPC',
			'Slurm',
			'Docker/LXC',
			'ZFS',
			'Git',
			'Databases',
			'Additive Manufacturing',
			'Autodesk Fusion 360',
			'Photography',
			'Videography'
		]
	}
];
