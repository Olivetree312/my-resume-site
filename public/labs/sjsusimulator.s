# Below is a skeleton for this simulator to help you get started:
#
# This is the skeleton program for CMPE 102 assignment 2
#
# gcc -g sjsusimulator.s -o sjsusimulator.exe
#
.global  main
.data
ten: .long 10
counter: .long 0
itoa_string: .ascii "          \n"
sjsuprompt: .ascii "(sjsu) "
instruction: .ascii "                                                            "
ilen: .long 0
alu: .long 0
hex_string: .ascii "0x00000000\n"
itob_string: .ascii "                                  \n" #34 spaces+\n
.text
main:
#   similar to eax = write(1,"(sjsu) "
    mov    $4,%eax
    mov    $1,%ebx
    mov    $sjsuprompt,%ecx
    mov    $7,%edx
    int    $0x80
#   similar to eax = read(0,instruction,16), 6 total bytes per line ("mov x"+\n)
#   eax becomes length of read string + \n, parameter only specifies upper limit
    mov    $3,%eax
    mov    $0,%ebx
    mov    $instruction,%ecx
    mov    $64,%edx
    int    $0x80
    dec    %eax				# decrement eax to get rid of \n
    mov    %eax,ilen			# placing length of whole string in ilen
    cmpl   $0x20766f6d,instruction	# cmpl "mov ",instruction in hex
    je     do_mov
    cmpl   $0x20646461,instruction	# cmpl "add ",instruction in hex
    je     do_add
    cmpl   $0x206c756d,instruction	# cmpl "mul ",instruction in hex
    je     do_mul
#using https://www.rapidtables.com/convert/number/ascii-to-hex.html
#string literal in little endian order
#ascii is array of singular bytes, so indices in regular order, NOT little endian
    cmpl   $0x20627573, instruction	# cmpl "sub "
    je     do_sub
    cmpl   $0x206f7571, instruction	# cmpl "quo "
    je     do_quo
    cmpl   $0x206d6572, instruction	# cmpl "rem "
    je     do_rem
    cmpl   $0x0a6d7573, instruction	# cmpl "sum\n"
    je     do_sum
    cmpl   $0x20726F72, instruction	# cmple "ror "
    je     do_ror
    cmpl   $0x206c6f72, instruction     # cmple "rol "
    je     do_rol
    cmpl   $0x206c6173, instruction     # cmple "sal "
    je     do_sal
    cmpl   $0x20726173, instruction     # cmple "sar "
    je     do_sar
    cmpl   $0x20646e61, instruction     # cmple "and "
    je     do_and
    cmpw   $0x726f, instruction 	# cmple "or "
    je     check_or
    cmpl   $0x20726f78, instruction     # cmple "xor "
    je     do_xor
    cmpl   $0x0a746f6e, instruction     # cmple "not\n"
    je     do_not
check_or:
    cmpb   $' ', instruction+2		# check for space after or-> then jump to do_or
    je     do_or
# jump back to main if not matching any
    jmp     main		    	#loops back to main
do_ror:#shifts every bit right, LSB copied into carry flag & MSB
	leal	instruction+4, %esi	#operand after ror
	call	parse_dec_or_bin
	movl	%edx, %ecx
	andl	$31, %ecx		#masks lower 0b11111 5 bits
	rorl	%cl, alu		#rotate right alu by val of %cl
	call	print_dec_from_alu
        call .itob_c
        call .itob_print
	jmp	main
do_rol:#shifts every bit left, MSB copied into LSB & carry flag
	leal	instruction+4, %esi
	call	parse_dec_or_bin
        movl    %edx, %ecx
        andl    $31, %ecx               #masks lower 0b11111 5 bits
        roll    %cl, alu
        call    print_dec_from_alu
        call .itob_c
        call .itob_print
	jmp	main
do_sal:#shifts every bit right, preserves sign
	leal	instruction+4, %esi
	call	parse_dec_or_bin
        movl    %edx, %ecx
        andl    $31, %ecx               #masks lower 0b11111 5 bits
        sall    %cl, alu
        call    print_dec_from_alu
        call .itob_c
        call .itob_print
	jmp	main
do_sar:
        leal    instruction+4, %esi
        call    parse_dec_or_bin
        movl    %edx, %ecx
        andl    $31, %ecx               #masks lower 0b11111 5 bits
        sarl    %cl, alu
        call    print_dec_from_alu
        call .itob_c
        call .itob_print
	jmp	main
do_and:
        leal    instruction+4, %esi
        call    parse_dec_or_bin
	andl	%edx, alu
        call    print_dec_from_alu
        call .itob_c
        call .itob_print
	jmp	main
do_or:
	leal	instruction+3, %esi
	call	parse_dec_or_bin
	orl	%edx, alu
        call    print_dec_from_alu
        call .itob_c
        call .itob_print
	jmp	main
do_xor:
	leal	instruction+4, %esi
	call	parse_dec_or_bin
	xorl	%edx, alu
        call    print_dec_from_alu
	call .itob_c
        call .itob_print
	jmp	main
do_not:
	notl	alu
        call    print_dec_from_alu
        call .itob_c
        call .itob_print
	jmp	main
do_mov:
	leal	instruction+4, %esi
	call	parse_dec_or_bin
	movl	%edx, alu
	call 	print_dec_from_alu
	call	.itob_c
	call	.itob_print
	jmp	main
do_add:
        leal    instruction+4, %esi
        call    parse_dec_or_bin
        addl    %edx, alu
        call    print_dec_from_alu
        call    .itob_c 
        call    .itob_print
        jmp     main
do_mul:
        leal    instruction+4, %esi
        call    parse_dec_or_bin
	movl	alu, %eax
        imull    %edx
	movl	%eax, alu
        call    print_dec_from_alu
        call    .itob_c 
        call    .itob_print
        jmp     main
do_sub:
        leal    instruction+4, %esi
        call    parse_dec_or_bin
        subl    %edx, alu
        call    print_dec_from_alu
        call    .itob_c 
        call    .itob_print
        jmp     main
do_quo:
        leal    instruction+4, %esi
        call    parse_dec_or_bin
	movl	alu, %eax		#mov alu to quot pos
	movl	%edx, %ebx		#mov int to temp reg
	cdq				#sign extends edx:eax
        idivl   %ebx			#eax div by ebx
	movl	%eax, alu		#mov quot from eax to alu 
        call    print_dec_from_alu
        call    .itob_c 
        call    .itob_print
        jmp     main
do_rem:
       leal    instruction+4, %esi
        call    parse_dec_or_bin
        movl    alu, %eax               #mov alu to quot pos
        movl    %edx, %ebx              #mov int to temp reg
        cdq                             #sign extends edx:eax
        idivl   %ebx                    #eax div by ebx
        movl    %edx, alu               #mov quot from eax to alu 
        call    print_dec_from_alu
        call    .itob_c 
        call    .itob_print
        jmp     main

do_sum:
    mov    alu,%eax
    test   %eax, %eax		#AND between eax & eax --> sets/ clears flags
    jge    .sum_pos		#if n>=0, sum=n(n+1)/2
    negl   %eax			#abs val of eax
    mov    %eax, %ecx		#save eax
    incl   %eax			#n+1
    imull  %ecx			#edx:eax = eax*ecx = n(n+1)
    sarl   $1, %eax		#shift arithmetic right = divides by 2 w sign preservation
    negl   %eax			#makes negative again w 2's complement
    jmp   .sum_store
.sum_pos:
    mov    %eax, %ecx
    incl   %eax
    imull  %ecx
    sarl   $1,%eax
.sum_store:
    mov    %eax, alu
    mov    %eax, counter
    call itoa
    mov    $4, %eax
    mov    $1, %ebx
    mov    $itoa_string, %ecx
    mov    $11, %edx
    int    $0x80
    call   itoh
    mov    $4, %eax
    mov    $1, %ebx
    mov    $hex_string, %ecx
    mov    $11, %edx
    int    $0x80
        call .itob_c
	call .itob_print
    jmp    main
# exit here
    mov    $1,%eax
    mov    $0,%ebx
    int    $0x80
#   Function atoi() to convert an ascii string like "mov 125" in variable instruction into binary 125, in variable counter
atoi:
    mov    ilen,%esi			# set esi to the length of instruction variable
    dec    %esi				# decrement by 1 to point at the last byte
    mov    $1,%ebx			# using ebx as the scale factor, starting from 1 or 10^0, then 10^1,10^2,etc
    movl   $0,counter    		# initialize the result counter to 0
atoi_loop:
    mov    $0,%eax
    movb   instruction(%esi),%al	# LSB of eax = instruction[esi]
    cmpb   $'-', %al
    je     .a_negate_and_ret
    subb   $'0',%al			# convert from character like '0' to decimal like 0
    imull  %ebx				# multiply eax by the scaling factor in ebx
    add    %eax,counter			# add the value of one digit to the counter
    imull   $10,%ebx,%ebx		# multiply the scaling factor by 10, to get 1,10,100,etc
    dec    %esi				# esi = esi -1, moving to right, indices not in lil endian
    cmpl   $4,%esi			# Have we reached index 4 (the space) of "mov 125"
    jge    atoi_loop			# not yet, jump back
    ret
.a_negate_and_ret:
    negl   counter
    ret
#   Function itoa() to convert integer variable counter's value to ASCII characters, placed in variable itoa_string.
itoa:
#   copy counter to %eax to prepare for division
    mov    counter,%eax
#   copy 10 spaces to itoa_string
    movl   $0x20202020,itoa_string
    movl   $0x20202020,itoa_string+4
    movw   $0x2020,itoa_string+8
#   point %edi index register to the last byte of itoa_string, think:
#   char *itoa_string="    ";
#   char *edi = &itoa_string[9];
    lea    itoa_string+9,%edi
    mov    $0, %ebx		#sign flag=0 (positive)
    cmp    $0, %eax		#check if negative -> flip sign
    jge    .itoa_abs_ready	#if positive, jump to abs_ready
    negl    %eax		#if negative, flip sign flag and get abs val
    mov    $1, %ebx
.itoa_abs_ready:
    cmp   $0,%eax		#corner case: zero
    jne   itoa_loop
    movb  $'0',(%edi)
    dec   %edi
    jmp    .itoa_sign_out
itoa_loop:
    mov    $0,%edx
    idivl  ten
    addl   $'0',%edx    # convert from binary 0 (or 1-9) to '0' (or '1'-'9')
    movb   %dl,(%edi)   # think: *(edi) = '0'
    dec    %edi         # think: edi--;
    cmpl   $0,%eax
    jg     itoa_loop
.itoa_sign_out:
    cmp    $0,%ebx	#if was negative -> add sign
	je	.itoa_done
    movb    $'-',(%edi)
.itoa_done:
	ret
#int to ascii but in hex "0x________\n" -> 11 char = 11 bytes total
itoh:
    mov    alu, %eax
    lea    hex_string+9, %edi	#writes to last hex digit before \n
    mov    $8, %ecx		#8 total digits to be written
    mov    $16, %ebx		#divisior = 16
.itoh_loop:
    xor    %edx,%edx
    divl   %ebx			#edx:eax divided by ebx=16
#remainder to ascii
    cmp   $9, %edx
    jle    .itoh_digit		#treat below or equal for hex (=unsigned)
    #digit is >=10 --> add deci val of 'a'=97 minus min val of edx=10
    add    $87, %edx		#10...15 -> 'a'...'f' bc 'a'-10=97-10=87
    jmp    .itoh_store
.itoh_digit:
    add    $48, %edx		#0-9 -> ('0'=48) 
#even when adding decimal, stores as hex
.itoh_store:
    movb  %dl, (%edi)		#stores ascii hex char
    dec    %edi			#edi up next register
    dec    %ecx			#1 nibble = 1/2 byte = 1 hex digit done
    jnz    .itoh_loop
    ret
#itob + print
.itob_c:#need prologue when calling assembly from c, but NOT c from assembly
    push    $itob_string		#PTR to string is pushed = esp- 4 bytes
    push    alu			#alu is pushed = esp- 4 bytes
    call    itob		#itob is called & operations performed --> done modding values
    addl    $8, %esp		#pop both itob_string and alu off the stack simultaneously
	ret
.itob_print:
	mov	$4, %eax
	mov	$1, %ebx
	mov	$itob_string, %ecx
	mov	$35, %edx
	int	$0x80
    ret
#extra credit - reads in binary or dec
#ESI = start of operand, returns EDX = value
parse_dec_or_bin:
	pushl	%ebp		#pushes addr of old base onto stack
	movl	%esp, %ebp	#saves addr of current base onto stack = addr of addr old base
	#checking for "0b"
	cmpw	$0x6230, (%esi)	#compares 'b0' written in little endian to esi
				#x86 reads multiple bytes as little endian, but string NOT endian
	jne	.use_atoi	#not binary --> use atoi
	leal	2(%esi), %eax	#eax marks start of num
	pushl	%eax
	call	btoi		#bin value into eax
	addl	$4,%esp		#pop eax off stack
	movl	%eax,%edx	#moves final bin val into edx
	jmp	.done
.use_atoi:#esi=p, (esi)=first char of num
	call	atoi
	movl	counter, %edx
.done:
        movl    %ebp, %esp      #points esp to current base/ loc on stack of old base ptr
        popl    %ebp            #ebp = val of current base/ addr of old base
	ret
#int btoi(const char *), where p=esi
btoi:
	pushl	%ebp
	movl	%esp, %ebp
	movl	8(%ebp),%esi	#return addr sits at 4(%ebp)
	xorl	%eax, %eax	#faster way to set eax to 0
.bloop:
	movzbl	(%esi), %ecx	#ecx = *p	#read 1 byte into CL (0 extend)
	cmpb	$'0', %cl	#comparing 0 to lsb in string
	je	.got0
	cmpb	$'1', %cl
	je	.got1
	jmp	.bdone
.got0:
	shl	$1, %eax	#multiplies eax by 2, making space for next MSB
	incl	%esi		#incrementing esi to get next MSB in str
	jmp	.bloop		#go back to process next char in str
.got1:
	shl	$1, %eax
	or	$1, %eax	#sets LSB of eax to 1 = +1 to val of eax
	incl	%esi
	jmp	.bloop
.bdone:
	movl	%ebp, %esp
	popl	%ebp
	ret
print_dec_from_alu:
	movl	alu, %eax
	movl	%eax, counter
	call	itoa
	movl	$4, %eax
	movl	$1, %ebx
	movl	$itoa_string, %ecx
	movl	$11, %edx
	int	$0x80
	ret
