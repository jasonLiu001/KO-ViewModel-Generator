KnockoutJS-ViewModel-Generator
========================
A tool can create viewmodel in knockout.js automatically.
------------------------

# ��;
* �����û������Զ�����knockout��Ӧ��viewmodel����

# ����
1. ��װnpm������
2. ����Դ�뵽���أ����л���Դ���Ŀ¼����cmd�����У�������������npm install ==> npm link

# ʹ��
1. �Զ���model�ļ����¶�Ӧ��model���󣬸ö���������viewmodel�����json�����ļ�����������:
	var dataModel = {
	//keyֵΪviewmodel���������
	"mainViewModel": {
	    title: '',
	    summary: '',
	    detailList: [],
	    getData: new Function()//viewmodel����Ҫ���ɵķ�ʽ
	},
	"detailViewModel": {
	    detailTitle: '',
	    detailSummary: ''
	}
	};